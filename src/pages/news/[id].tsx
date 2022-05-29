import { client } from '../../../libs/client';
import type { Article } from '../../../types/article';

type Props = {
    article: Article;
};

export default function NewsId({ article }: Props) {
    return (
        <main>
            <h1>{article.title}</h1>
            <p>{article.publishedAt}</p>
            <div
                dangerouslySetInnerHTML={{
                    __html: `${article.body}`,
                }}
            />
        </main>
    );
}

export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: 'article' });

    const paths = data.contents.map((content: { id: string }) => `/news/${content.id}`);
    return { paths, fallback: false };
};

export const getStaticProps = async (context: { params: { id: string } }) => {
    const id = context.params.id;
    const data = await client.get({ endpoint: 'article', contentId: id });

    return {
        props: {
            article: data,
        },
    };
};
