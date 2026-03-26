"use server";
import { Article } from "../types";
import { revalidatePath } from "next/cache";

export const getArticles = async (): Promise<Article[]> => {
	try {
		const result = await sql`SELECT * FROM articles ORDER BY created_at DESC`;
		return result.rows.map((row) => ({
			id: row.id,
			title: row.title,
			slug: row.slug,
			excerpt: row.excerpt,
			content: row.content,
			createdAt: row.created_at,
			updatedAt: row.updated_at,
		})) as Article[];
	} catch (error) {
		throw new Error("Error fetching articles");
	}
};

export const getArticleBySlug = async (slug: string): Promise<Article | null> => {
	try {
		const result = await sql`SELECT * FROM articles WHERE slug = ${slug}`;
		const row = result.rows[0];
		if (!row) return null;
		return {
			id: row.id,
			title: row.title,
			slug: row.slug,
			excerpt: row.excerpt,
			content: row.content,
			createdAt: row.created_at,
			updatedAt: row.updated_at,
		} as Article;
	} catch (error) {
		throw new Error("Error fetching article");
	}
};

export const createArticle = async (articleData: Omit<Article, "id" | "createdAt" | "updatedAt">) => {
	try {
		await sql`
            INSERT INTO articles (title, slug, excerpt, content)
            VALUES (${articleData.title}, ${articleData.slug}, ${articleData.excerpt}, ${articleData.content})
        `;
		revalidatePath("/articles");
	} catch (error) {
		throw new Error("Error creating article");
	}
};
