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

    function handleMinus() {
        dispatch({
            type: 'minus',
            id
        })
    }

    return (
        <div className={styles.cartItemCard}>
            <div className={styles.imageBox}>
                <img className={styles.cartItemImage }src={imageURL}></img>
            </div>
            <div className={styles.productDetails}>
                <h2 className={styles.productTitle}>{name}</h2>
                <div className={styles.productPrice}>${price} <span>(per item)</span></div>
                <div className={styles.productTotal}>Total: ${totalPrice}</div>
            </div>
            <div className={styles.buttons}>
                <button onClick={handlePlus}>Plus</button>
                <button onClick={handleMinus}>Minus</button>
            </div>
        </div>
    )
}