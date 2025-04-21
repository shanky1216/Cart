import { useContext, useRef } from 'react';

import CartModal from './CartModal.jsx';
import {CartContext} from '../store/cart-context.jsx';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const {items} = useContext(CartContext);
  const modal = useRef();
  const navigate = useNavigate();

  const cartQuantity = items.length;

  function handleOpenCartClick() {
    modal.current.open();
  }

  let modalActions = <button>Close</button>;
  
  function handleClick(){
    navigate("/checkout");
  }

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button onClick={handleClick}>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal
        ref={modal}
        title="Your Cart"
        actions={modalActions}
      />
      <header id="main-header">
        <Link id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </Link>
        <p>
          <button className='btn' onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}
