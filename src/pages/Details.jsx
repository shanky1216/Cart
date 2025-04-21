import { useParams } from 'react-router-dom';
import Product from '../components/Product';
import { DUMMY_PRODUCTS } from '../dummy-products';

const Details = () => {
  const { productId } = useParams();
  const item = DUMMY_PRODUCTS.find(item => item.id === productId);
  console.log(item)

  return (
    <div className='details'>
     <Product {...item} details/>
    </div>
  );
};

export default Details;