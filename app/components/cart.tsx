import { Product } from "../types";
import { formatPrice } from "@/lib/utils";
import { Minus, Plus, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "./cartContext";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  function totalPrice() {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  function handleQuantity(product: Product, newQuantity: number) {
    updateQuantity(product.id, Math.max(0, newQuantity));
  }

  return (
    <div className="bg-zinc-100 border rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0"
            >
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">
                  {formatPrice(item.price)}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                {/* <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantity(item, item.quantity - 1)}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <Input
                  type="number"
                  min="0"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantity(item, Number.parseInt(e.target.value) || 0)
                  }
                  className="w-16 text-center [appearance:textfield]"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantity(item, item.quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button> */}
                <div className="flex rounded-md border">
                  <Button
                    variant="outline"
                    onClick={() => handleQuantity(item, item.quantity - 1)}
                    className="rounded-l-md rounded-r-none p-0 w-10 h-10 inline-flex items-center justify-center text-sm text-foreground focus:outline-none hover:bg-background hover:text-foreground border-none"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <Input
                    type="number"
                    min="0"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantity(item, Number.parseInt(e.target.value) || 0)
                    }
                    className="w-16 rounded-none text-center [appearance:textfield] border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  <Button
                    variant="outline"
                    onClick={() => handleQuantity(item, item.quantity + 1)}
                    className="rounded-r-md rounded-l-none p-0 w-10 h-10 inline-flex items-center justify-center text-sm text-foreground focus:outline-none hover:bg-background hover:text-foreground border-none"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  className="hover:bg-destructive hover:text-destructive-foreground"
                  onClick={() => removeFromCart(item.id)}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 pt-4 border-t">
        <p className="text-lg font-bold">Total: {formatPrice(totalPrice())}</p>
        <Button className="w-full mt-4">Checkout</Button>
      </div>
    </div>
  );
}

