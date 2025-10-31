import { useContext } from 'react';
import PageHeader from '../components/PageHeader'
import { CartItemsContext } from '../providers/CartItemsProvider'
import styles from './CartPage.module.css'
import CartItemGrid from '../components/CartItemGrid';

export default function CartPage() {
    const cartItems = useContext(CartItemsContext);

    return (
        <div className={styles.pageContainer}>
            <PageHeader>Cart Page</PageHeader>
            <CartItemGrid></CartItemGrid>
        </div>)
}