export type ProductsSort = "asc" | "desc";

export type ProductsLimit = "5" | "10" | "20";

export type ProductsRequestParams = {
  sort: ProductsSort;
  limit: ProductsLimit;
};

export type Product = {
  id: number;
  title: string;
  nameClient: string;
  description: string;
  typeСonnection: string;
  price: number;
  requirement: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type ProductCreate = {
  title: string;
  nameclient: string;
  description: string;
  typeСonnection: string;
  price: number;
  requirement: string;
  image: string;
};

export type ProductUpdate = ProductCreate;
