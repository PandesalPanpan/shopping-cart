import { useContext } from 'react';
import styles from './CartItem.module.css';
import { CartItemsDispatcherContext } from '../providers/CartItemsProvider';

export default function CartItem({
    id,
    name,
    imageURL,
    price,
    count
}) {
    const dispatch = useContext(CartItemsDispatcherContext);
    const totalPrice = price * count;

    function handlePlus() {
        dispatch({
            type: 'add',
            id,
        })
    }

    return (
        <div className={styles.cartItemCard}>
            <div className={styles.imageBox}>
                <img className={styles.cartItemImage }src={imageURL}></img>
            </div>
            <div className={styles.productDetails}>
                <div>{name}</div>
                <div>{price}</div>
                <div>{count}</div>
            </div>
            <div className={styles.buttons}>
                <button onClick={handlePlus}>Plus</button>
                <button>Minus</button>
            </div>
        </div>
    )
}