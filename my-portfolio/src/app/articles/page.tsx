import React from 'react';
import { getArticles } from '../../actions/articleActions';
import ArticleCard from '../../components/articles/ArticleCard';

const ArticlesPage = async () => {
    const articles = await getArticles();

    return (
        <div>
            <h1>Articles</h1>
            <div className="article-list">
                {articles.map(article => (
                    <ArticleCard key={article.slug} article={article} />
                ))}
            </div>
        </div>
    );
};

export default ArticlesPage;