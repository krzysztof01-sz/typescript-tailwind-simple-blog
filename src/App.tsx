import { createContext, useEffect, useState } from 'react';
import { getArticles } from './helpers';
import { Article, ArticleContextSchema } from './interfaces';
import Header from './components/Header';
import ArticlesList from './components/ArticlesList';
import Form from './components/Form';

const ArticleContextDefaultValues: ArticleContextSchema = {
  articles: getArticles(),
  addArticle: () => {},
  deleteArticle: (idToDelete: number) => {},
};

export const ArticlesContext = createContext(ArticleContextDefaultValues);

function App() {
  const [articles, setArticles] = useState(ArticleContextDefaultValues.articles);

  useEffect(() => localStorage.setItem('articles', JSON.stringify(articles)), [articles]);

  const addArticle = (article: Article) => setArticles([article, ...articles]);

  const deleteArticle = (idToDelete: number) => {
    const newArticles = articles.filter(({ id }) => id !== idToDelete);
    setArticles(newArticles);
  };

  return (
    <ArticlesContext.Provider value={{ articles: articles, addArticle, deleteArticle }}>
      <div className="App">
        <Header message="Your best Blog (only for you)!" />
        <section className="container flex flex-col lg:flex-row justify-around m-auto mt-10">
          <Form />
          <ArticlesList />
        </section>
      </div>
    </ArticlesContext.Provider>
  );
}

export default App;
