import toast from "react-hot-toast"
import truncateString from "../utils/truncate";
import { useContext } from "react";
import { CartItemsDispatcherContext } from "../providers/CartItemsProvider";

export default function AddToCart({
    productId, 
    name,
    price,
    imageURL
}) {
    const dispatch = useContext(CartItemsDispatcherContext);
    
    return (
        <button onClick={() => {
            dispatch({
                type: 'add',
                id: productId,
                imageURL,
                name,
                price
            });
            toast.success(`${truncateString(name, 15)} Added to Cart`);
        }}>Add to Cart</button>
    )
}