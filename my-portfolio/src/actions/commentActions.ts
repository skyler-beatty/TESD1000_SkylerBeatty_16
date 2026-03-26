"use server";
import { sql } from "@vercel/postgres";
import { auth } from "../auth";
import { revalidatePath } from "next/cache";
import { Comment } from "../types";

export const getCommentsByArticleId = async (articleId: string): Promise<Comment[]> => {
	try {
		const result = await sql`
            SELECT comments.*, users.name as author 
            FROM comments 
            JOIN users ON comments.user_id = users.id
            WHERE comments.article_id = ${articleId}
            ORDER BY comments.created_at DESC
        `;
		return result.rows.map((row) => ({
			id: row.id,
			articleId: row.article_id,
			userId: row.user_id,
			author: row.author,
			content: row.content,
			createdAt: row.created_at,
			updatedAt: row.updated_at,
		})) as Comment[];
	} catch (error) {
		throw new Error("Error fetching comments");
	}
};

export const createComment = async (articleId: string, content: string) => {
	try {
		const session = await auth();
		if (!session?.user?.id) throw new Error("Unauthorized");

		await sql`
            INSERT INTO comments (article_id, user_id, content)
            VALUES (${articleId}, ${session.user.id}, ${content})
        `;
		revalidatePath(`/articles`);
	} catch (error) {
		throw new Error("Error creating comment");
	}
};

export const updateComment = async (commentId: string, content: string) => {
	try {
		const session = await auth();
		if (!session?.user?.id) throw new Error("Unauthorized");

		const existing = await sql`SELECT * FROM comments WHERE id = ${commentId}`;
		if (existing.rows[0]?.user_id !== session.user.id) throw new Error("Unauthorized");

		await sql`
            UPDATE comments SET content = ${content}, updated_at = NOW()
            WHERE id = ${commentId}
        `;
		revalidatePath("/articles");
	} catch (error) {
		throw new Error("Error updating comment");
	}
};

export const deleteComment = async (commentId: string) => {
	try {
		const session = await auth();
		if (!session?.user?.id) throw new Error("Unauthorized");

		const existing = await sql`SELECT * FROM comments WHERE id = ${commentId}`;
		if (existing.rows[0]?.user_id !== session.user.id) throw new Error("Unauthorized");

		await sql`DELETE FROM comments WHERE id = ${commentId}`;
		revalidatePath("/articles");
	} catch (error) {
		throw new Error("Error deleting comment");
	}
};
