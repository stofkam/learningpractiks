import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
import { api } from "../api/apiProducts";
import { addToCart } from "../store/cartSlise"; // Проверьте опечатку в названии файла (Slice/Slise)

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // 1. Получаем данные о товаре
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => api.fetchProductId(id),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  // 2. Получаем данные из Redux-хранилища
  const productCart = useSelector((state) => state.cart.cartItems);

  // Состояния загрузки и ошибки
  if (isLoading) return <div className="home-hero">Загрузка товара...</div>;
  if (isError) return <div className="home-hero">Ошибка: {error.message}</div>;

  // Проверка на случай, если запрос успешный, но товара с таким id нет в базе
  if (!data) return <div className="home-hero">Товар не найден</div>;

  // Безопасный поиск количества товара в корзине
  const productQuantityLabel =
    productCart.find((item) => item.id === data.id)?.quantity || 0;

  return (
    <div className="product-card-id">
      <img src={data.image} alt={data.name} />
      <div className="product-card-content">
        <h3 className="product-card-title">{data.name}</h3>
        <p className="product-card-price">${data.price}</p>
        <div className="product-card-actions">
          <button
            className="navbar-auth-link primary btn"
            onClick={() => dispatch(addToCart(data))}
          >
            Add to Cart ({productQuantityLabel})
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
