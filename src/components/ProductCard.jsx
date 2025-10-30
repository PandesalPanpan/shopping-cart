import styles from './ProductCard.module.css';

export default function ProductCard({
    name,
    image
}) {

    return (
        <div className={styles.productCardContainer}>
            <div className={styles.imageBox}>
                <img className={styles.productImage} src={image}>
                </img>
            </div>
            <h3>{name}</h3>
            <div>Add to Cart (Create a add to cart component)</div>
        </div>
    ) 
}