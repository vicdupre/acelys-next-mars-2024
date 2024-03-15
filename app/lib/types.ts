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

export interface Customer {
  id: string;
  name: string;
  invoices?: Invoice[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Invoice {
  id: string;
  amount: number;
  status: string;
  customer?: Customer;
  customerId: string;
  createdAt: Date;
  updatedAt: Date;
}
