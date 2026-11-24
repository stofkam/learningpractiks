import React from "react";
import { useDispatch } from "react-redux";
// 1. Исправили возможную ошибку в названии файла слайса (cartSlice)
import { updateQuantity, removeFromCart } from "../store/cartSlise"; 

const ProductItemCart = ({ product }) => {
  const dispatch = useDispatch();
  
  // Принудительно переводим в числа, чтобы избежать склеивания строк типа "2" + 1 = "21"
  const currentQuantity = Number(product.quantity) || 0;
  const currentPrice = Number(product.price) || 0;

  return (
    <div className="product-card-item">
      <div>
        <img src={product.image} alt={product.name} />
        <div className="product-card-content-cart">
          <h3 className="product-card-title-cart">{product.name}</h3>
          <p className="product-card-price-cart">${currentPrice}</p>
        </div>
      </div>
      <div className="product-card-actions-cart">
        <div className="product-card-price-quantity">
          {/* 2. Передаем гарантированно числовые значения */}
          <button 
            className="card-action-batton" 
            onClick={() => dispatch(updateQuantity({ id: product.id, quantity: currentQuantity - 1 }))}
          >
            -
          </button>
          <span>{currentQuantity}</span>
          <button 
            className="card-action-batton" 
            onClick={() => dispatch(updateQuantity({ id: product.id, quantity: currentQuantity + 1 }))}
          >
            +
          </button>
        </div>
        <p className="product-card-quantity-cart">
          {(currentPrice * currentQuantity).toFixed(2)}
        </p>
        <button 
          className="navbar-auth-link-cart" 
          onClick={() => dispatch(removeFromCart({ id: product.id }))}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default ProductItemCart;
