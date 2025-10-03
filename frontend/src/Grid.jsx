import ProductCard from "./ProductCard";

export default function Grid({ cart, addToCart, changeQty }) {
  const products = [
    { title: "Rose", price: 42 },
    { title: "Fern", price: 12 },
    { title: "Sunflower", price: 20 },
    { title: "Cactus", price: 15 },
    { title: "Lavender", price: 18 },
    { title: "Orchid", price: 35 },
    { title: "Lily", price: 25 },
    { title: "Aloe Vera", price: 10 },
    { title: "Snake Plant", price: 22 },
    { title: "Peace Lily", price: 28 },
    { title: "Bonsai", price: 50 },
    { title: "Succulent", price: 8 },
    { title: "Daisy", price: 15 },
    { title: "Tulip", price: 30 },
  ];

  return (
    <div className="w-full p-6 bg-accent rounded-xl">
      <h2 className="text-3xl font-extrabold text-secondary mb-6 text-center">
        Our Plants 🌿
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => {
          const cartItem = cart.find((c) => c.title === p.title);
          return (
            <ProductCard
              key={p.title}
              title={p.title}
              price={p.price}
              qty={cartItem ? cartItem.qty : 0}
              addToCart={() => addToCart(p)}
              changeQty={(delta) => changeQty(p.title, delta)}
            />
          );
        })}
      </div>
    </div>
  );
}
