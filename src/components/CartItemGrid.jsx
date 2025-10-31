import { useContext } from 'react';
import { CartItemsContext } from '../providers/CartItemsProvider';
import CartItem from './CartItem';
import styles from './CartItemGrid.module.css';

export default function CartItemGrid() {
    const cartItems = useContext(CartItemsContext);


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