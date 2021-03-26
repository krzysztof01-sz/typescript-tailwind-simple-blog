import { useContext } from 'react';
import { ArticlesContext } from '../../App';
import { Article } from '../../interfaces';

interface Props {
  article: Article;
}

function ArticleCard({ article: { id, author, title, content, category, minutesToRead } }: Props) {
  const { deleteArticle } = useContext(ArticlesContext);

  return (
    <article className="w-4/5 m-auto article p-5 shadow-xl rounded-xl my-5 relative">
      <i
        onClick={() => deleteArticle(id)}
        className="text-lg text-red-500 far fa-trash-alt absolute top-5 right-5 cursor-pointer hover:text-red-700"
      ></i>
      <section className="flex items-center">
        <h1 className="text-gray-800 font-bold text-sm mr-2">{author}</h1>
        <img
          className="flex items-center justify-center rounded-full"
          alt="author avatar"
          src="https://unsplash.it/30/30"
        />
      </section>
      <p className="text-2xl font-medium mt-3 mb-4">{title}</p>
      <p className="text-xl">{content}</p>
      <section className="flex items-center justify-between mt-5">
        <p>Category: {category}</p>
        <p>Reading time: {`${minutesToRead.toFixed(0)} minutes`}</p>
      </section>
    </article>
  );
}

export default ArticleCard;
