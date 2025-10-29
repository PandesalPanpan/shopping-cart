import styles from './CartPage.module.css'

export default function CartPage() {

    return (
        <div className={styles.pageContainer}>
            <h1>Cart</h1>
            {/*Probably make this into a component*/}
            <h2>Linear Grid with a Checkout and Total</h2>
            <div className={styles.featuredCollections}>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </div>
        </div>)
}