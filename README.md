# Shopping Cart

Live demo: N/A

A small React shopping cart demo demonstrating routing, a global cart context, product listing/cards, and small UI utilities.

## Key features
- Client-side routing (RouterProvider / createBrowserRouter)
- Global cart state via a provider + reducer
- Add-to-cart actions with toast notifications
- Product cards with consistent image sizing and clamped text
- Cart page with item list and checkout area
- Small utility helpers (truncate, cart totals)

## Tech stack
- React
- react-router (RouterProvider)
- CSS Modules for component-scoped styles

## Notes / implementation details
- Use a Context + useReducer for cart state (recommended for global access and predictable updates).
- Use absolute paths (leading `/`) with Links to avoid relative route resolution (e.g. use `/shop` not `shop` from /cart).
- Constrain images by placing them in a fixed/aspect-ratio wrapper and using `object-fit: cover` to ensure all cards are the same size.

