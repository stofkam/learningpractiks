import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlise";

const ProductCard = ({ product }) => {
  const productCart = useSelector((state) => state.cart.cartItems);
  const productQuantityLabel =
    productCart?.find((item) => item.id === product.id)?.quantity || 0;
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <img src={product.image} alt="" />
      <div className="product-card-content">
        <h3 className="product-card-title">{product.name}</h3>
        <p className="product-card-price">${product.price}</p>
        <div className="product-card-actions">
          <Link to={`/product/${product.id}`} className="navbar-auth-link btn">
            View Details
          </Link>
          <button
            className="navbar-auth-link primary btn"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart ({productQuantityLabel})
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
