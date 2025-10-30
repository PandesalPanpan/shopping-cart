import styles from './ProductCard.module.css';
import AddToCart from './AddToCart';
export default function ProductCard({
    name,
    image,
    price,
    rating
}) {
    return (
        <div className={styles.productCardContainer}>
            <div className={styles.imageBox}>
                <img className={styles.productImage} src={image}>
                </img>
            </div>
            <div className={styles.productDetails}>
                <h3>{name}</h3>
                <div className={styles.flexPriceStars}>
                    <p>${price}</p>
                    <span>{rating.rate}</span>
                </div>
            </div>
            <AddToCart></AddToCart>
        </div>
    ) 
}