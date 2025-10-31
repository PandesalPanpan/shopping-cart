import { useContext } from 'react';
import styles from './Checkout.module.css';
import { CartItemsContext, CartItemsDispatcherContext } from '../providers/CartItemsProvider';
import { getSubtotal, getTotalItemsCount } from '../utils/cart-data-utils';

export default function Checkout() {
    const cartItems = useContext(CartItemsContext);
    const dispatch = useContext(CartItemsDispatcherContext);

    const handleClear = () => {
        dispatch({
            type: 'clear'
        })
    }

    const subtotal = getSubtotal(cartItems);
    const totalItemsCount = getTotalItemsCount(cartItems);

    return (
        <div className={styles.checkoutContainer}>
            <h2>Subtotal Amount: <span>${subtotal}</span></h2>
            <h3>Total Number of items: <span>{totalItemsCount}</span></h3>
            <p>Tax included after checkout.</p>
            <div className={styles.actionButtons}>
                <button onClick={handleClear}>Clear</button>
                <button className={styles.checkoutButton}>Checkout</button>
            </div>
            {/* Total number of items */}
            {/* Some information like tax included */}
            {/* Some action buttons like Clear, Checkout */}
        </div>
    )
}