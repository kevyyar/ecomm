import React from "react";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";
import { getProductsQueryOptions } from "../../utils/getProductsQueryOptions";

const ProductList: React.FC = () => {
  // useQuery hook
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery(getProductsQueryOptions());

  // loading states
  if (isLoading) return <p className="text-center">Loading products...</p>;

  if (isError)
    return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
