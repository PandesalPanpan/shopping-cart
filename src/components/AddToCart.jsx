import toast from "react-hot-toast"
import truncateString from "../utils/truncate";

export default function AddToCart({name}) {
    // Write a trigger a notifier from here
    return (
        <button onClick={() => {
            toast.success(`${truncateString(name, 15)} Added to Cart`);
        }}>Add to Cart</button>
    )
}