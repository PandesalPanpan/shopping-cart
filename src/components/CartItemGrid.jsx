import { useContext } from 'react';
import { CartItemsContext } from '../providers/CartItemsProvider';
import CartItem from './CartItem';
import styles from './CartItemGrid.module.css';

export default function CartItemGrid() {
    const cartItems = useContext(CartItemsContext);

    if (cartItems.length < 1) {
        return (
            <h2>
                You have an empty cart.
            </h2>
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
            <div>Grid Checkout Component</div>
        </div>
    )
}