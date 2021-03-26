export enum Category {
  TRAVELS = 'travels',
  FOOD = 'food',
  MUSIC = 'music'
}

export const dummyArticles = [{
  id: 1,
  title: 'Hello!',
  author: 'Chris',
  content: `It's your first article in this pseudo blog.`,
  category: Category.TRAVELS,
  date: new Date(),
  minutesToRead: 0
}]