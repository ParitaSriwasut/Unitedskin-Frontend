import CartComponent from "../components/cart/Cart";
import { useCart } from "../contexts/CartContext";

export default function CartContainer() {
  const { cart, getCart, deleteFromCart, increaseDecreaseProduct } = useCart();

  if (!cart.items) {
    getCart();
  }

  return (
    <CartComponent
      items={cart.items}
      total={cart.total}
      deleteFromCart={deleteFromCart}
      increaseDecreaseProduct={increaseDecreaseProduct}
    />
  );
}
export { CartContainer };
