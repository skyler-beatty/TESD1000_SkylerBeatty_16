import React, { Suspense } from "react";
import { getArticles } from "../../actions/articleActions";
import ArticleCard from "../../components/articles/ArticleCard";

const ArticlesPage = async () => {
	const articles = await getArticles();

	return (
		<div>
			<h1 className="text-3xl font-bold mb-6">Articles</h1>
			<Suspense fallback={<p>Loading articles...</p>}>
				<div className="grid gap-4">
					{articles.map((article) => (
						<ArticleCard key={article.slug} article={article} />
					))}
				</div>
			</Suspense>
		</div>
	);
};

export default ArticlesPage;
