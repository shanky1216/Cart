import React, { useContext } from "react";
import { CartContext } from "../store/cart-context";
import cart from "../assets/empty-cart.png";
import { useNavigate } from "react-router-dom";
import filledCart from "../assets/shopping-cart.png";

const Checkout = () => {
  const { items, updateItemToCart } = useContext(CartContext);
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/");
  }
  function handleOrder(){
    navigate("/order")
  }
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;
  return (
    <div>
      <div id="checkout">
        {items.length === 0 && (
          <div className="cart-empty">
            <h2>You haven't selected any item yet!!</h2>
            <img src={cart} alt="empty cart" />
            <button className="btn" onClick={handleNavigate}>
              Click to choose item
            </button>
          </div>
        )}
        {items.length > 0 && (
          <div style={{display:"flex", flexDirection: "column", justifyContent:"center", alignItems:'center'}}>
            <div className="cart-container">
              <img src={filledCart} alt="filled cart" />
              <ul id="checkout-items">
                {items.map((item) => {
                  const formattedPrice = `$${item.price.toFixed(2)}`;

                  return (
                    <li key={item.id}>
                      <div>
                        <span>{item.name}</span>
                        <span> ({formattedPrice})</span>
                      </div>
                      <div className="cart-item-actions">
                        <button onClick={() => updateItemToCart(item.id, -1)}>
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateItemToCart(item.id, 1)}>
                          +
                        </button>
                      </div>
                    </li>
                  );
                })}
                <p style={{float:'right'}}>Total Price: <strong style={{color:'#edbf68', }}>{formattedTotalPrice}</strong></p>
              </ul>
            </div>
            <button className="btn" onClick={handleOrder}>Order Now!</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
