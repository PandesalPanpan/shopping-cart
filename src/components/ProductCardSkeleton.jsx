import Skeleton from 'react-loading-skeleton';
import styles from './ProductCard.module.css';

export default function ProductCardSkeleton() {
    return (
        <div className={styles.productCardContainer}>
            <div className={styles.imageBox}>
                <Skeleton className={styles.productImage} style={{width: '350px'}}>
                </Skeleton>
            </div>
            <Skeleton count={2} height='2rem'></Skeleton>

        </div>
    );
}