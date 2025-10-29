import styles from './Navigation.module.css';
import { Link } from 'react-router';

export default function Navigation() {

    return (
        <nav className={styles.navigationContainer}>
            <ul className={styles.navigationList}>
                <li><Link className={styles.navLink}to="/">Home</Link></li>
                <li><Link className={styles.navLink}to="shop">Shop</Link></li>
                <li><Link className={styles.navLink}to="cart">Cart</Link></li>
            </ul>
        </nav>
    )
}