export default function ProductCard({ title, price, qty, addToCart, changeQty }) {
  return (
    <div className="w-72 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-5 flex-shrink-0">
      <div className="text-center">
        <div className="overflow-hidden rounded-2xl mb-4">
          <img
            className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
            src={`/images/${title}.jpg`}
            alt={title}
          />
        </div>
        <h2 className="text-secondary font-extrabold text-xl mb-1">{title}</h2>
        <p className="text-secondary font-medium mb-4">${price}</p>

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
              className="bg-red-500 text-white px-4 py-1 rounded-xl"
            >
              -
            </button>
            <span className="font-bold">{qty}</span>
            <button
              onClick={() => changeQty(1)}
              className="bg-green-500 text-white px-4 py-1 rounded-xl"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
