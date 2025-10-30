import styles from './ProductCard.module.css';
import AddToCart from './AddToCart';
import { StarRating } from 'react-flexible-star-rating';
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
                    <div className={styles.flexStarsCount}>
                        <StarRating
                        starsLength={5}
                        isHoverEnabled={false}
                        isReadOnly={true}
                        initialRating={Math.floor(rating.rate)}
                        dimension={7}
                        color="#ffd700"
                        />
                        <span>({rating.count})</span>
                    </div>
                </div>
            </div>
            <AddToCart></AddToCart>
        </div>
    ) 
}