import { useState } from "react";
import { api } from "~/api";
import { Page } from "~/types/Page";

import { Product, ProductsRequestParams } from "~/types";

export const useProducts = (initialProducts: Page<Product[]>,) => {
  const [products, setProducts] = useState(initialProducts);
  const [isLoading, setIsLoading] = useState(false);
  //console.log('??????????????????????????????????????????????????????????????????');

  const refetch = async (params: ProductsRequestParams) => {
    //console.log('///////////////////////////////////////////////////////////////////');
    setIsLoading(true);
    
    try {
      const response = await api.products.getProducts(params);
      //console.log('******************************************************************');
      //console.log(response.data);
      //console.log('******************************************************************');

      setProducts(response.data);
    } catch {
      //console.log('??????????????????????????????????????????????????????????????????');
    }

    setIsLoading(false);
  };

  return { products, isLoading, refetch };
};
