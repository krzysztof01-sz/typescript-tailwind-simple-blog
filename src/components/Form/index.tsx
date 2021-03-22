import { useState } from 'react';
import { Category } from '../../constants';
import { Article, ArticleFormData } from '../../interfaces';
import { getMinutesToRead, generateArticleId } from '../../helpers';
import TextInput from './Input';
import TextArea from './TextArea';
import Select from './Select';

const initialArticleData: ArticleFormData = {
  author: '',
  title: '',
  content: '',
  category: Category.FOOD,
};

class Validator {
  isValid({ title, content, author }: Article): boolean {
    return [title, content, author].every(value => value.trim() !== '');
  }
}

interface Props {
  addArticle: (article: Article) => void;
}

function Form({ addArticle }: Props) {
  const [article, setArticle] = useState<ArticleFormData>(initialArticleData);
  const [error, setError] = useState<string | undefined>(undefined);

  return (
    <form
      className="flex flex-col w-full lg:w-2/5 m-auto mt-5 p-5 pt-10 shadow-md"
      onSubmit={function (e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();

        const id = generateArticleId();
        const minutesToRead = getMinutesToRead(article.content);
        const newArticle: Article = { ...article, id, minutesToRead, date: new Date() };
        const isValid = new Validator().isValid(newArticle);

        if (isValid) {
          addArticle(newArticle);
          setArticle(initialArticleData);
          setError('');
        } else {
          setError('All fields are required.');
        }
      }}
    >
      <h2 className="text-gray-800 text-center text-xl mb-4">Add a new article</h2>

      <TextInput name="author" value={article.author} setValue={setArticle} />
      <TextInput name="title" value={article.title} setValue={setArticle} />
      <TextArea name="content" value={article.content} setValue={setArticle} />
      <Select name="category" value={article.category} setValue={setArticle} options={Category} />

      <button className="bg-gray-800 hover:bg-indigo-500 rounded-xl p-2 m-2 text-center text-white font-bold w-1/2">
        Add an article
      </button>

      <p className="text-red-500 mt-2 text-center font-semibold">{error}</p>
    </form>
  );
}

export default Form;
