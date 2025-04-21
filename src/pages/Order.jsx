import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../store/cart-context';

const Order = () => {
  const { clearCart, items } = useContext(CartContext);
  console.log(items)


const handleOrderPlaced = () => {
  clearCart();
  navigate("/");
};
  const navigate = useNavigate();
  return (
    <div className="order-success">
      <div className="order-card">
        <div className="order-icon">✅</div>
        <h1>Thank You!</h1>
        <p>Your order has been placed successfully.</p>
        <p>We’ll send you a confirmation email shortly.</p>

        <div className="order-summary">
          <h3>Order Summary:</h3>
          <ul>
            {items.length === 0 ? (
              <li className="empty">Your cart was successfully cleared.</li>
            ) : (
              items.map((item) => (
                <li key={item.id}>
                  {item.name} × {item.quantity}
                </li>
              ))
            )}
          </ul>
        </div>
        <button onClick={handleOrderPlaced}>Continue Shopping</button>
      </div>
    </div>
  
  )
}

export default Order