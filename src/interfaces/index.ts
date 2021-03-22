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
