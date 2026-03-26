import React, { Suspense } from "react";
import ProjectCarousel from "../components/carousel/ProjectCarousel";
import { getArticles } from "../actions/articleActions";
import ArticleCard from "../components/articles/ArticleCard";
import Link from "next/link";

const HomePage = async () => {
	const articles = await getArticles();

	return (
		<div className="flex flex-col gap-12">
			<section>
				<h1 className="text-4xl font-bold mb-6">Welcome to My Portfolio</h1>
				<ProjectCarousel />
			</section>
			<section>
				<h2 className="text-2xl font-bold mb-4">Latest Articles</h2>
				<Suspense fallback={<p>Loading articles...</p>}>
					<div className="grid gap-4">
						{articles.slice(0, 3).map((article) => (
							<ArticleCard key={article.slug} article={article} />
						))}
					</div>
				</Suspense>
				<Link href="/articles" className="text-blue-600 hover:underline mt-4 inline-block">
					View All Articles →
				</Link>
			</section>
		</div>
	);
};

export default HomePage;
