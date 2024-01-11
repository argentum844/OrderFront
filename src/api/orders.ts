import { Product, ProductsRequestParams } from "~/types";
import { apiInstance } from "./instance";
import { Page } from "~/types/Page";

export const getProducts = (params?: ProductsRequestParams) => {
  return apiInstance.get<Page<Product[]>>("/orders", { params });
};

export const getProductById = (id: number) => {
  return apiInstance.get<Product>(`/orders/${id}`);
};
