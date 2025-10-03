import "./index.css";

export default function ProductCard({ title, price }) {
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
        <p className="text-secondary font-medium mb-4">{price}</p>
        <div>
          <button className="bg-button hover:bg-accent transition-colors duration-300 rounded-xl text-white font-bold px-6 py-3 w-full shadow-md hover:shadow-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
