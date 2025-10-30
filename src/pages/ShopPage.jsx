import { useEffect, useState } from 'react';
import styles from './ShopPage.module.css';
import ProductCard from '../components/ProductCard';
import { Toaster } from 'react-hot-toast';

export default function ShopPage() {
    const [isLoading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const controller = new AbortController();

        const fetchProduct = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products', { signal: controller.signal });
                if (!response.ok) throw new Error('Network error');
                const json = await response.json();
                console.log(json);
                setLoading(false);
                setProducts(json);
            } catch (err) {
                if (err.name !== 'AbortError') console.error(err);
            }
        }

        fetchProduct();

        return () => controller.abort();

    }, []);

    return (
        <div className={styles.pageContainer}>
            <Toaster
                position='top-center'
                reverseOrder={false}
            />
            <h1>Shop</h1>
            {/*Probably make this into a component*/}
            <h2>Bigger Grid here</h2>
            <div className={styles.productsGallery}>
                {isLoading ? <div>Loading</div> : products.map((product) => {
                    return (
                        <li key={product.id}>
                            <ProductCard 
                            name={product.title} 
                            image={product.image} 
                            price={product.price} 
                            rating={product.rating}
                            />
                        </li>
                    )
                })}
            </div>
        </div>
    )
}