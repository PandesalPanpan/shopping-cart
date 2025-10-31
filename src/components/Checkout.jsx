import { useContext } from 'react';
import styles from './Checkout.module.css';
import { CartItemsContext } from '../providers/CartItemsProvider';

export default function Checkout() {
    const cartItems = useContext(CartItemsContext);

    const subtotal = cartItems.reduce((prev, curr) => {
        return prev + (curr.price * curr.count);
    }, 0).toFixed(2);

    const totalItemsCount = cartItems.reduce((prev, curr) => {
        return prev + curr.count; 
    }, 0)

    return (
        <div className={styles.checkoutContainer}>
            <h2>Subtotal Amount: <span>${subtotal}</span></h2>
            <h3>Total Number of items: <span>{totalItemsCount}</span></h3>
            <p>Tax included after checkout.</p>
            <div className={styles.actionButtons}>
                <button>Clear</button>
                <button className={styles.checkoutButton}>Checkout</button>
            </div>
            {/* Total number of items */}
            {/* Some information like tax included */}
            {/* Some action buttons like Clear, Checkout */}
        </div>
    )
}