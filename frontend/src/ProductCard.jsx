export default function ProductCard({ title, price }) {
  return (
    <div class="card w-72 bg-primary shadow-lg rounded-xl p-4">
      <div class="card-body">
        <h2 class="card-title text-secondary">{title}</h2>
        <p class="text-secondary font-medium">{price}</p>
        <div class="card-actions mt-4">
          <button class="btn btn-accent w-full">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
