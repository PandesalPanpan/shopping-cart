import { createContext, useReducer } from "react";

export const CartItemsContext = createContext([]);
export const CartItemsDispatcherContext = createContext(null);

export function CartItemsProvider({ children }) {
    const [cartItems, dispatch] = useReducer(reducer, []);

    return (
        <CartItemsContext value={cartItems}>
            <CartItemsDispatcherContext value={dispatch}>
                {children}
            </CartItemsDispatcherContext>
        </CartItemsContext>
    )
}

const findCartItemIdIndex = (array, id) => {
    return array.findIndex((item) => item.id === id);
}


export function reducer(cartItems, action) {
    if (action.type === 'add') {
        // Check if action.id already is in the action items
        const itemIndex = findCartItemIdIndex(cartItems, action.id);

        // Update the cartItem count 
        if (itemIndex !== -1) {
            return cartItems.map((item) =>
                item.id === action.id ? ({ ...item, count: item.count++ }) : item
            );
        }

        return [
            ...cartItems, {
                id: action.id,
                imageURL: action.imageURL,
                name: action.name,
                price: action.price,
                count: 1
            }
        ]
    }

    if (action.type === 'minus') {
        const itemIndex = findCartItemIdIndex(cartItems, action.id);

        if (itemIndex === -1) {
            throw Error("Item not found");
        }

        return cartItems.map((item) => {
            return item.id === action.id ? 
            ({...item, count: item.count - 1}) : item
        }
        ).filter((item) => item.count > 0);
    }
    
    throw Error("Unknown action.");
}