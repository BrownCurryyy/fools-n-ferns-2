import ProductCard from "./ProductCard";

export default function Grid() {
  return (
    <div className="w-full p-6 bg-accent rounded-xl">
      <h2 className="text-3xl font-extrabold text-secondary mb-6 text-center">
        Our Plants 🌿
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard title="Rose" price="$42" />
        <ProductCard title="Fern" price="$12" />
        <ProductCard title="Sunflower" price="$20" />
        <ProductCard title="Cactus" price="$15" />
        <ProductCard title="Lavender" price="$18" />
        <ProductCard title="Orchid" price="$35" />
        <ProductCard title="Lily" price="$25" />
        <ProductCard title="Aloe Vera" price="$10" />
        <ProductCard title="Snake Plant" price="$22" />
        <ProductCard title="Peace Lily" price="$28" />
        <ProductCard title="Bonsai" price="$50" />
        <ProductCard title="Succulent" price="$8" />
        <ProductCard title="Daisy" price="$15" />
        <ProductCard title="Tulip" price="$30" />
      </div>
    </div>
  );
}
