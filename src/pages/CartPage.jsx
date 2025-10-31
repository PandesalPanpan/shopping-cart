import { useContext } from 'react';
import PageHeader from '../components/PageHeader'
import { CartItemsContext } from '../providers/CartItemsProvider'
import styles from './CartPage.module.css'

export default function CartPage() {
    const cartItems = useContext(CartItemsContext);

    return (
        <div className={styles.pageContainer}>
            <PageHeader>Cart Page</PageHeader>
            {cartItems.map((item) => {
                console.log(item);
                return (
                    <div>
                        <p>{item.id}</p>
                        <p>{item.name}</p>
                        <p>{item.count}</p>
                        <p>{item.price}</p>
                    </div>
                )
            })}
            <h2>Linear Grid with a Checkout and Total</h2>
        </div>)
}