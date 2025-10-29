import styles from './ShopPage.module.css';

export default function ShopPage() {

    return (
        <div className={styles.pageContainer}>
            <h1>Shop</h1>
            {/*Probably make this into a component*/}
            <h2>Bigger Grid here</h2>
            <div className={styles.featuredCollections}>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </div>
        </div>
    )
}