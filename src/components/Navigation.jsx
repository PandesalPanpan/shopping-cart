import { useContext } from 'react';
import styles from './Navigation.module.css';
import { Link } from 'react-router';
import { CartItemsContext } from '../providers/CartItemsProvider';
import { getTotalItemsCount } from '../utils/cart-data-utils';

export default function Navigation() {
    const cartItems = useContext(CartItemsContext);
    const totalItemsCount = getTotalItemsCount(cartItems);

    return (
        <nav className={styles.navigationContainer}>
            <ul className={styles.navigationList}>
                <li><Link className={styles.navLink}to="/">Home</Link></li>
                <li><Link className={styles.navLink}to="shop">Shop</Link></li>
                <li><Link className={styles.navLink}to="cart">Cart
                {totalItemsCount > 0 ? <span className={styles.itemCountBadge}>{totalItemsCount}</span> : null}
                </Link></li>
            </ul>
        </nav>
    )
}