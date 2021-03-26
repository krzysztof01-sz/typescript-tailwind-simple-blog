import { Category } from '../constants';

export interface ArticleFormData {
  author: string;
  title: string;
  content: string;
  category: Category;
}

export interface Article extends ArticleFormData {
    id: number;
    date: Date;
    minutesToRead: number;
}

export interface ArticleContextSchema {
  articles: Article[];
  addArticle: (article: Article) => void;
  deleteArticle: (idToDelete: number) => void;
}

export interface InputProps {
  name: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<ArticleFormData>>;
}
