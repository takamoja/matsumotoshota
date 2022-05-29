import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { client } from '../../libs/client';
import type { Article } from '../../types/article';

type Props = {
    articles: Array<Article>;
};

export default function News({ articles }: Props) {
    return (
        <div>
            <Head>
                <title>News Page</title>
            </Head>
            <main>
                <h1>ここはニュースページです</h1>
                <ul>
                    {articles.map(article => (
                        <li key={article.id}>
                            <Link href={`/news/${article.id}`}>
                                <a>{article.title}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
}

export const getStaticProps = async () => {
    const data = await client.get({ endpoint: 'article' });

    return {
        props: {
            articles: data.contents,
        },
    };
};
