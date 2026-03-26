import { getArticleBySlug } from "../../../actions/articleActions";
import CommentSection from "../../../components/articles/CommentSection";
import { notFound } from "next/navigation";

interface ArticlePageProps {
	params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
	const { slug } = await params;
	const article = await getArticleBySlug(slug);

	if (!article) return notFound();

	return (
		<div className="max-w-3xl mx-auto">
			<h1 className="text-3xl font-bold mb-4">{article.title}</h1>
			<div className="prose mb-8">{article.content}</div>
			<CommentSection articleId={article.id} />
		</div>
	);
}
