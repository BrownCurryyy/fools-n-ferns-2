// src/App.jsx
import { useRef, useState } from "react";
import About from "./About";
import Footer from "./Footer";
import Grid from "./Grid";
import Hero from "./Hero";
import Header from "./Header";
import Contact from "./Contact";
import Cart from "./Cart";
import { checkoutOrder } from "./services/cartService";

export default function App() {
  const contactRef = useRef(null);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [loadingCheckout, setLoadingCheckout] = useState(false);

  const scrollToContact = () => contactRef.current?.scrollIntoView({ behavior: "smooth" });

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      return existing
        ? prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p))
        : [...prev, { ...product, qty: 1 }];
    });
  };

  const changeQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: Math.max(p.qty + delta, 0) } : p))
        .filter((p) => p.qty > 0)
    );
  };

  const handleCheckout = async () => {
    if (!cart.length) return;
    setLoadingCheckout(true);
    try {
      await checkoutOrder(cart);
      setCart([]);
      setCartOpen(false);
      alert("Thank you for shopping! 🌿");
    } catch (err) {
      console.error("Checkout failed:", err);
      alert("Checkout failed. Try again.");
    } finally {
      setLoadingCheckout(false);
    }
  };

  return (
    <>
      <Header
        onContactClick={scrollToContact}
        cartCount={cart.length}
        onCartClick={() => setCartOpen(true)}
      />

      <Hero />
      <Grid cart={cart} addToCart={addToCart} changeQty={changeQty} />
      <About />
      <Contact ref={contactRef} />
      <Footer />

      {cartOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-primary rounded-2xl p-6 w-96 relative">
            <button
              className="absolute top-3 right-3 text-secondary text-xl font-bold"
              onClick={() => setCartOpen(false)}
            >
              ×
            </button>
            <Cart cartItems={cart} removeFromCart={(id) => changeQty(id, -999)} onClearCart={() => setCart([])} />
            <button
              onClick={handleCheckout}
              disabled={loadingCheckout}
              className={`mt-4 w-full bg-accent text-secondary font-bold py-2 rounded-2xl shadow-md transition-colors duration-200 ${
                loadingCheckout ? "opacity-50 cursor-not-allowed" : "hover:bg-accent/90"
              }`}
            >
              {loadingCheckout ? "Processing..." : "Checkout 🛒"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
