import React from "react";
import Link from "next/link";
import { Article } from "../../types";

interface ArticleCardProps {
	article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
	return (
		<div className="article-card">
			<h2>{article.title}</h2>
			<p>{article.excerpt}</p>
			<Link href={`/articles/${article.slug}`} className="read-more">
				Read More
			</Link>
		</div>
	);
};

export default ArticleCard;
