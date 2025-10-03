import { useRef, useState } from "react";
import About from "./About";
import Footer from "./Footer";
import Grid from "./Grid";
import Hero from "./Hero";
import Header from "./Header";
import Contact from "./Contact";
import Cart from "./Cart";

export default function App() {
  const contactRef = useRef(null);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.title === product.title);
      if (existing) {
        return prev.map((p) =>
          p.title === product.title ? { ...p, qty: p.qty + 1 } : p
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  const changeQty = (title, delta) => {
    setCart((prev) =>
      prev
        .map((p) =>
          p.title === title ? { ...p, qty: Math.max(p.qty + delta, 0) } : p
        )
        .filter((p) => p.qty > 0)
    );
  };

  return (
    <>
      <Header
        onContactClick={scrollToContact}
        cartCount={cart.length}
        onCartClick={() => setCartOpen(true)}
      />

      <Hero />

      <Grid addToCart={addToCart} changeQty={changeQty} cart={cart} />

      <About />
      <Contact ref={contactRef} />
      <Footer />

      {/* Cart Modal */}
      {cartOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-primary rounded-2xl p-6 w-96 relative">
            <button
              className="absolute top-3 right-3 text-secondary text-xl font-bold"
              onClick={() => setCartOpen(false)}
            >
              ×
            </button>
            <Cart
              cartItems={cart}
              removeFromCart={(title) => changeQty(title, -999)}
              onClearCart={() => setCart([])}
            />    
          </div>
        </div>
      )}
    </>
  );
}
