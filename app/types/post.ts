export interface Author {
  name: string;
  role: string;
  href: string;
  imageUrl: string;
}

export interface Category {
  title: string;
  href: string;
}

export interface Post {
  id: string;  
  title: string;
  slug: string;  
  href: string;
  description: string;
  imageUrl: string;
  date: string;
  datetime: string;
  category: Category;
  author: Author;
  content: string; 
  additionalImage1?: string;  
  additionalImage2?: string; 
}