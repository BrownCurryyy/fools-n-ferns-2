// src/ProductCard.jsx
export default function ProductCard({ title, price, qty, img_url, addToCart, changeQty }) {
  return (
    <div className="w-72 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-5 flex-shrink-0">
      <div className="text-center">
        {/* Image */}
        <div className="overflow-hidden rounded-2xl mb-4">
          <img
            className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
            src={img_url || `/images/${title}.jpg`}
            alt={title}
            onError={(e) => (e.target.src = "/images/placeholder.jpg")}
          />
        </div>

        {/* Title & Price */}
        <h2 className="text-secondary font-extrabold text-xl mb-1">{title}</h2>
        <p className="text-secondary font-medium mb-4">${price.toFixed(2)}</p>

        {/* Add to Cart / Qty Controls */}
        {qty === 0 ? (
          <button
            onClick={addToCart}
            className="bg-button hover:bg-accent transition-colors duration-300 rounded-xl text-white font-bold px-6 py-3 w-full shadow-md hover:shadow-lg"
          >
            Add to Cart
          </button>
        ) : (
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => changeQty(-1)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-xl transition-colors duration-200"
            >
              -
            </button>
            <span className="font-bold text-lg">{qty}</span>
            <button
              onClick={() => changeQty(1)}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-xl transition-colors duration-200"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
