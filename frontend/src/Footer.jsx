export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-lg font-bold mb-3">🌿 Fools & Ferns</h3>
          <p className="text-sm opacity-80">
            Making homes greener, happier & a little more magical ✨
          </p>
        </div>
        <div>
          <h4 className="text-md font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-accent">About Us</a></li>
            <li><a href="#products" className="hover:text-accent">Shop</a></li>
            <li><a href="#contact" className="hover:text-accent">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-md font-semibold mb-3">Follow Us</h4>
          <div className="flex justify-center md:justify-start gap-4 text-xl">
            <a href="#" className="hover:text-accent">🐦</a>
            <a href="#" className="hover:text-accent">📸</a>
            <a href="#" className="hover:text-accent">🌐</a>
          </div>
        </div>
      </div>
      <p className="text-center text-xs mt-8 opacity-60">
        © {new Date().getFullYear()} Fools & Ferns. All rights reserved.
      </p>
    </footer>
  );
}
