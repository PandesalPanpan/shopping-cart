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


export function reducer(cartItems, action) {
    if (action.type === 'add') {
        // Check if action.id already is in the action items
        const itemIndex = cartItems.findIndex((item) => item.id === action.id);

        // Update the cartItem count 
        if (itemIndex !== -1) {
            return cartItems.map((item) =>
                item.id === action.id ? ({ ...item, count: item.count++ }) : item
            );
        }

        return [
            ...cartItems, {
                id: action.id,
                name: action.name,
                price: action.price,
                count: 1
            }
        ]
    }


    throw Error("Unknown action.");
}