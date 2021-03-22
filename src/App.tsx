import { useState } from 'react';
import { Article } from './interfaces';
import Header from './components/Header';
import ArticlesList from './components/ArticlesList';
import Form from './components/Form';
import { getArticles } from './helpers';

function App() {
  const articles = getArticles();
  const [articlesList, setArticlesList] = useState<Article[]>(articles);

  return (
    <div className="App">
      <Header message="Your best Blog (only for you)!" />
      <section className="container flex flex-col lg:flex-row justify-around m-auto mt-10">
        <Form
          addArticle={function (article: Article): void {
            localStorage.setItem('articles', JSON.stringify([article, ...articlesList]));
            return setArticlesList([article, ...articlesList]);
          }}
        />
        <ArticlesList articles={articlesList} setArticles={setArticlesList} />
      </section>
    </div>
  );
}

export default App;
