import styles from './CartItem.module.css';

export default function CartItem({
    name,
    imageURL,
    price,
    count
}) {
    // Calculate the price total in here
    const totalPrice = price * count;

    // Add a dispatch on adding and removing buttons

    return (
        <div className={styles.cartItemCard}>
            <div className={styles.imageBox}>
                <img className={styles.cartItemImage }src={imageURL}></img>
            </div>
            <div>
                <div>{name}</div>
                <div>{price}</div>
                <div>{count}</div>
            </div>
        </div>
    )
}