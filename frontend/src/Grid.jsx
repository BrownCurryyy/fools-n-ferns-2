// src/Grid.jsx
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { fetchProducts } from "./services/cartService";

export default function Grid({ cart, addToCart, changeQty }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadProducts() {
      try {
        const data = await fetchProducts();
        if (mounted) setProducts(data || []);
      } catch (err) {
        console.error("Error loading products:", err);
        if (mounted) setProducts([]);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadProducts();
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <div className="p-6 text-center text-secondary text-lg">Loading products…</div>;
  if (!products.length) return <div className="p-6 text-center text-secondary text-lg">No products found 😢</div>;

  return (
    <div className="w-full p-6 bg-accent rounded-xl">
      <h2 className="text-3xl font-extrabold text-secondary mb-6 text-center">
        Our Plants 🌿
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {products.map((p) => {
          const inCart = cart.find((item) => item.id === p.id);
          return (
            <ProductCard
              key={p.id}
              title={p.title}
              price={p.price}
              qty={inCart ? inCart.qty : 0}
              img_url={p.img_url}
              addToCart={() => addToCart(p)}
              changeQty={(delta) => changeQty(p.id, delta)}
            />
          );
        })}
      </div>
    </div>
  );
}
