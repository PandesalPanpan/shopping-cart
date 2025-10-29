import styles from './Navigation.module.css';

export default function Navigation() {

    return (
        <nav className={styles.navigationContainer}>
            <ul className={styles.navigationList}>
                <li><button><a href="/"></a>Home</button></li>
                <li><button><a href="/shop"></a>Shop</button></li>
                <li><button><a href="/cart"></a>Cart</button></li>
            </ul>
        </nav>
    )
}