import Button from '../button/button.component';
import { useNavigate } from 'react-router-dom';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    };

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
            </div>
            <Button onClick={goToCheckoutHandler} >CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;