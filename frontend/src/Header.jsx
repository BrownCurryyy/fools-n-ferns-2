import { FaUser, FaShoppingBasket, FaPhone } from "react-icons/fa";

export default function Header({ onContactClick }) {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md bg-primary">
      {/* Logo / Brand */}
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide text-secondary">
        Fools & Ferns 🌿
      </h1>

      {/* Icons */}
      <div className="flex items-center gap-6 text-secondary text-2xl">
        <button
          className="hover:text-accent transition-colors duration-200"
          aria-label="Contact"
          onClick={onContactClick}
        >
          <FaPhone />
        </button>

        <button
          className="hover:text-accent transition-colors duration-200"
          aria-label="Login"
        >
          <FaUser />
        </button>

        <button
          className="hover:text-accent transition-colors duration-200 relative"
          aria-label="Cart"
        >
          <FaShoppingBasket />
          <span className="absolute -top-2 -right-2 bg-button text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            0
          </span>
        </button>         
      </div>
    </header>
  );
}
