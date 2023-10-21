import Cart from "../components/cart/Cart";
import { useCart } from "../contexts/CartContext";

export function CartContainer() {
  const { cart, getCart, deleteFromCart } = useCart();

  if (!cart.items) {
    getCart();
  }

  return Cart({ items: cart.items, total: cart.total, deleteFromCart });
}
