import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductItemCart from "../components/ProductItemCart";
import { clearCart} from "../store/cartSlise";



const Checkout = () => {
  const productCart = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
 
  const dispatch = useDispatch();
 
    
  
  return (
    <div className="page">
      <div className="page-container">
         <div className="cart-empty">
          {productCart?.length === 0 ? (
            <p className="cart-empty-text">Your cart is empty</p>
          ) : (
            <>
           <div className="page-hed"> 
          <h2 className="page-title">Checkout</h2> 
        <button className="navbar-auth-link-cart danger " onClick={()=>dispatch(clearCart({}))} >Clear Cart</button>
      
     
        </div>
        <div className="cart-grid">
          <div className="carts-property">
            {productCart?.map((product) => (
              <ProductItemCart key={product.id} product={product} />
            ))}
          </div>
          <div className="carts-total">
            <div className="product-card-item-total">
              <h3 className="product-card-title-cart">Total</h3>
              <div className="subtotal">
                <p>Subtotal:</p>
                <p>${totalPrice.toFixed(2)}</p>
              </div>
              <div className="total">
                <p>Total:</p>
                <p>${totalPrice.toFixed(2)}</p>
              </div>
              <button className="btn-tottal">Place Order</button>
            </div>
          </div>
        </div>
            </>
          )
          
          }
         </div>

      </div>
    </div>
  );
};

export default Checkout;
