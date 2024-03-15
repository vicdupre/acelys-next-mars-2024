export interface LayoutProps {
  children: React.ReactNode;
}

export interface UsersPageProps {
  params: {
    id: string;
  };
}

export interface Rating {
  rate: number;
  count: number;
}
export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: Rating;
}

export interface Post {
  id: number;
  title: string;
  content: string;
}

export type Products = Product[];
