import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../api/apiProducts";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const currentQueryClient = useQueryClient();
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: api.fetchProducts,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  if (isLoading) return <div className="home-hero">Загрузка задач...</div>;
  if (isError) return <div className="home-hero">Ошибка: {error.message}</div>;
  return (
    <div className="page">
      <div className="home-hero">
        <h1 className="home-hero-title">Welcome to ShopHub</h1>
        <p className="home-hero-subtitle">
          Your one-stop online shopping destination
        </p>
      </div>
      <div className="page-container">
        <h2 className="page-title">Our Products</h2>
        <div className="products-grid">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
