import { useEffect, useState } from 'react';
import styles from './ShopPage.module.css';
import ProductCard from '../components/ProductCard';
import { Toaster } from 'react-hot-toast';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import ProductCardSkeleton from '../components/ProductCardSkeleton';


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
            <Skeleton></Skeleton>
            {/*Probably make this into a component*/}
            <div className={styles.productsGallery}>
                {isLoading ? (
                    Array(8).fill(0).map((_, index) => (
                        <li key={index}><ProductCardSkeleton/></li>
                    ))
                ) : products.map((product) => {
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