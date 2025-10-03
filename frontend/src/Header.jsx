import { useState, useRef, useEffect } from "react";
import { FaUser, FaShoppingBasket, FaPhone } from "react-icons/fa";

export default function Header({ onContactClick, cartCount, onCartClick }) {
  const [userOpen, setUserOpen] = useState(false);
  const [tab, setTab] = useState("login");
  const userRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (userRef.current && !userRef.current.contains(event.target)) {
        setUserOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md bg-primary relative">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide text-secondary">
        Fools & Ferns 🌿
      </h1>

      <div className="flex items-center gap-6 text-secondary text-2xl relative">
        <button
          className="hover:text-accent transition-colors duration-200"
          onClick={onContactClick}
        >
          <FaPhone />
        </button>

        {/* User */}
        <div ref={userRef} className="relative">
          <button
            className="hover:text-accent transition-colors duration-200"
            onClick={() => setUserOpen(!userOpen)}
          >
            <FaUser />
          </button>
          {userOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-md rounded-2xl p-3 z-50">
              <div className="flex justify-between mb-3">
                <button
                  className={`px-3 py-1.5 rounded-2xl text-sm font-semibold ${
                    tab === "login" ? "bg-primary text-gray-500" : "text-secondary"
                  }`}
                  onClick={() => setTab("login")}
                >
                  Login
                </button>
                <button
                  className={`px-3 py-1.5 rounded-2xl text-sm font-semibold ${
                    tab === "signup" ? "bg-primary text-gray-500" : "text-secondary"
                  }`}
                  onClick={() => setTab("signup")}
                >
                  Sign Up
                </button>
              </div>
              <form className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="p-2 text-sm rounded-xl border-2 border-primary focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="p-2 text-sm rounded-xl border-2 border-primary focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200"
                />
                {tab === "signup" && (
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="p-2 text-sm rounded-xl border-2 border-primary focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200"
                  />
                )}
                <button className="bg-button hover:bg-accent text-white text-sm font-semibold py-2 rounded-xl transition-colors duration-200">
                  {tab === "login" ? "Login" : "Sign Up"}
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Cart */}
<button
  className="hover:text-accent transition-colors duration-200 relative"
  aria-label="Cart"
  onClick={onCartClick}
>
  <FaShoppingBasket />
  {cartCount > 0 && (
    <span className="absolute -top-2 -right-2 bg-button text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
      {cartCount}
    </span>
  )}
</button>

      </div>
    </header>
  );
}
