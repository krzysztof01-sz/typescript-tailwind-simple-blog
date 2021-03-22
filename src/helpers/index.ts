import { dummyArticles } from "../constants";
import { Article } from "../interfaces";

export const getMinutesToRead = (articleContent: string): number => {
  return articleContent.split(' ').length / 120;
}

export const generateArticleId = (): number => {
  return Math.floor(Math.random() * 1000) + 1;
}

export const getArticles = (): Article[] => {
  const savedArticles: string = localStorage.getItem('articles') || JSON.stringify(dummyArticles);
  const parsedArticles = JSON.parse(savedArticles) || dummyArticles;

  return parsedArticles;
}