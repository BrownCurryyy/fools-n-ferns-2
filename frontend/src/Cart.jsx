import { useState } from "react";

export default function Cart({ cartItems, removeFromCart, onClearCart }) {
  const [showToast, setShowToast] = useState(false);

  // Total calculation
  const total = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    setShowToast(true);
    onClearCart(); // reset cart in parent
    setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <div className="flex flex-col gap-4">
      {cartItems.length === 0 ? (
        <p className="text-secondary text-center font-medium">
          Your cart is empty 😢
        </p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.title}
              className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div>
                <p className="font-bold text-lg">{item.title}</p>
                <p className="text-secondary text-sm">
                  ${item.price} × {item.qty}
                </p>
              </div>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-xl transition-colors duration-200"
                onClick={() => removeFromCart(item.title)}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right font-bold text-xl mt-2">
            Total: ${total}
          </div>

          <button
            className="mt-4 w-full bg-accent hover:bg-accent/90 text-secondary font-bold py-2 rounded-2xl shadow-md transition-colors duration-200"
            onClick={handleCheckout}
          >
            Checkout 🛒
          </button>
        </>
      )}

      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-6 right-6 bg-green-400 text-white px-6 py-3 rounded-2xl shadow-lg animate-fade-in-out">
          Thank you for shopping! 🌿
        </div>
      )}
    </div>
  );
}
