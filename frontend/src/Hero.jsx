// Hero.jsx
import { useState, useEffect } from "react";

export default function Hero() {
  const slides = [
    {
      title: "Fresh Roses",
      subtitle: "Bring color & love to your home",
      img: "/images/Rose.jpg",
      btn: "Shop Now",
    },
    {
      title: "Elegant Ferns",
      subtitle: "Low maintenance, endless vibes",
      img: "/images/Fern.jpg",
      btn: "Explore",
    },
    {
      title: "Sunny Sunflowers",
      subtitle: "Brighten any day, any room",
      img: "/images/Sunflower.jpg",
      btn: "Buy Now",
    },
    {
  title: "Lavender",
  subtitle: "Calm vibes for any space",
  img: "/images/Lavender.jpg",
  btn: "Shop Now",
},
{
  title: "Orchid",
  subtitle: "Elegance that lasts",
  img: "/images/Orchid.jpg",
  btn: "Explore",
},
{
  title: "Lily",
  subtitle: "Freshness and fragrance in bloom",
  img: "/images/Lily.jpg",
  btn: "Buy Now",
},
{
  title: "Cactus",
  subtitle: "Low maintenance, high style",
  img: "/images/Cactus.jpg",
  btn: "Add to Cart",
}
  ];

  const [current, setCurrent] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full overflow-hidden h-[500px]">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="w-full flex-shrink-0 h-[500px] bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white p-6">
              <h2 className="text-4xl font-bold mb-2">{slide.title}</h2>
              <p className="mb-4">{slide.subtitle}</p>
              <button className="bg-button hover:bg-accent text-black px-6 py-3 rounded-lg">
                {slide.btn}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
        }
        className="absolute top-1/2 -translate-y-1/2 left-4 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center"
      >
        ‹
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute top-1/2 -translate-y-1/2 right-4 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              idx === current ? "bg-white" : "bg-white/50"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
}
