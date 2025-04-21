import { useContext } from "react";
import {CartContext} from "../store/cart-context";
import { Link } from "react-router-dom";

export default function Product({
  id,
  image,
  title,
  price,
  description,
  details
}) {
  const {addItemToCart} = useContext(CartContext);

  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className='product-price'>${price}</p>
          {details ? <p>{description}</p> : null}
        </div>
        <p className='product-actions'>
          {!details ? <Link className="btn1" to={`/order/${id}`}>Details</Link> : <Link className="btn1" to="/">Home</Link>}
          <button className="btn" onClick={() => addItemToCart(id)}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}
