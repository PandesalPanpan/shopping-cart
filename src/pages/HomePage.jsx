import { Link } from 'react-router';
import PageHeader from '../components/PageHeader';
import styles from './HomePage.module.css';

export default function LandingPage() {

    return (
        <div className={styles.pageContainer}>
            <PageHeader>Home Page</PageHeader>
            <h2>Shopping Cart Application</h2>
            <ul>
                <li>A React with the React 19 Compiler</li>
                <li>Client-Side Routing with React Router</li>
                <li>Uses useContext and useReducer for Cart Logic</li>
                <li>Has Skeleton Loading for Shop Product Items</li>
                <li>And many more, try out in <Link to="shop">Shop</Link> and <Link to="cart">Cart</Link> Page</li>
            </ul>
        </div>
    )
}