import PageHeader from '../components/PageHeader';
import styles from './HomePage.module.css';

export default function LandingPage() {

    return (
        <div className={styles.pageContainer}>
            <PageHeader>Home Page</PageHeader>
            {/*Probably make this into a component*/}
            <div className={styles.featuredCollections}>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </div>
        </div>
    )
}