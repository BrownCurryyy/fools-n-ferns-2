import Carousel from "./Grid";
import Hero from "./Hero"; 

export default function App() {
  return (
    <>
<h1 className="text-5xl md:text-6xl font-extrabold tracking-wider mb-8 text-secondary">
  Fools & Ferns 
</h1>

      <div>
        <Hero />
      </div>
      <div className="min-h-screen bg-primary flex flex-col justify-center items-center">
        <Carousel />
      </div>
    </>
  );
}
