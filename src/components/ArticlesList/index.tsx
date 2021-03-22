import { Article } from '../../interfaces';
import ArticleCard from './Article';

interface Props {
  articles: Article[];
  setArticles: React.Dispatch<React.SetStateAction<Article[]>>;
}

function ArticlesList({ articles, setArticles }: Props) {
  return (
    <section className="w-full lg:w-1/2 flex flex-col">
      {articles.map(article => {
        return <ArticleCard setArticles={setArticles} key={article.id} article={article} />;
      })}
    </section>
  );
}

export default ArticlesList;
