import { useContext } from 'react'
import PropTypes from 'prop-types';
import { CartContext } from '../context/Cart'

const Item = (props) => {
    const cart = useContext(CartContext)
    
  return (
    <div className="item-card">
      <h4>{props.name}</h4>
      <p>Price: ${props.price}</p>
      <button onClick={() => 
        cart.setItems([
            ...cart.items, 
            { name: props.name, price: props.price },
        ])
       }
    >
            Add To Cart
        </button>
    </div>
  );
}

Item.propTypes = {
    name: PropTypes.string.isRequired, 
    price: PropTypes.number.isRequired,
  };
  
  

export default Item;
