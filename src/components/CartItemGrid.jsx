import { useContext } from 'react';
import { CartItemsContext } from '../providers/CartItemsProvider';
import CartItem from './CartItem';
import styles from './CartItemGrid.module.css';
import Checkout from './Checkout';
import { Link } from 'react-router';

export default function CartItemGrid() {
    const cartItems = useContext(CartItemsContext);

    if (cartItems.length < 1) {
        return (
            <div className={styles.textCenter}>
                <h2>
                    You have an empty cart.
                </h2>
                <h3>Navigate to <Link to="/shop">Shop Page</Link></h3>
            </div>
        )
    }


    return (
        <div className={styles.cartItemGrid}>
            <div>
                {cartItems.map((item) => {
                    return <CartItem
                        key={item.id}
                        {...item}
                    />
                })}
            </div>
            <Checkout>Grid Checkout Component</Checkout>
        </div>
    )
}