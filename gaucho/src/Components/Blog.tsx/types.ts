//types/ts
export type TabType = 'Tendencias' | 'Noticias' | 'Tips y Buenas Prácticas';

export interface BlogPost {
  id: string;
  category: TabType | string;
  title: string;
  summary: string;
  content: string;
  image: string;
  author: {
    initials: string;
    name: string;
  };
  date: string;
  readTime?: string;
  
}