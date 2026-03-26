import React from 'react';
import ProjectCarousel from '../components/carousel/ProjectCarousel';
import Link from 'next/link';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to My Portfolio</h1>
            <ProjectCarousel />
            <section>
                <h2>Articles</h2>
                <ul>
                    <li>
                        <Link href="/articles/article-1">Article 1</Link>
                    </li>
                    <li>
                        <Link href="/articles/article-2">Article 2</Link>
                    </li>
                    <li>
                        <Link href="/articles/article-3">Article 3</Link>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default HomePage;