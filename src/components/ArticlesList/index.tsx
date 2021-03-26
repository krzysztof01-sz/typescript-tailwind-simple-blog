import { useContext } from 'react';
import { ArticlesContext } from '../../App';
import ArticleCard from './Article';

function ArticlesList() {
  const { articles } = useContext(ArticlesContext);

  return (
    <section className="w-full lg:w-1/2 flex flex-col">
      {articles.map(article => {
        return <ArticleCard key={article.id} article={article} />;
      })}
    </section>
  );
}

export default ArticlesList;
