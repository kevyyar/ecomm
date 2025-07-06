import { queryOptions } from "@tanstack/react-query";
import { fetchProducts } from "../api/products";

export const getProductsQueryOptions = () => {
  return queryOptions({
    queryKey: ["products"], // unique identifier for the query
    queryFn: fetchProducts, // function to fetch data
  });
};
