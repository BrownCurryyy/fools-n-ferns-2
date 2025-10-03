import React from "react";
import "./index.css";
const Contact = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="bg-primary text-white py-12 px-6 md:px-20 rounded-t-3xl mt-16">
      <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
      <form className="max-w-xl mx-auto flex flex-col gap-4">
  <input
    type="text"
    placeholder="Your Name"
    className="p-3 rounded-xl text-black border-2 border-orange-950 focus:border-accent focus:ring-2 focus:ring-accent transition-all duration-200"
  />
  <input
    type="email"
    placeholder="Your Email"
    className="p-3 rounded-xl text-black border-2 border-orange-950 focus:border-accent focus:ring-2 focus:ring-accent transition-all duration-200"
  />
  <textarea
    placeholder="Your Message"
    className="p-3 rounded-xl text-black border-2 border-orange-950 focus:border-accent focus:ring-2 focus:ring-accent transition-all duration-200"
    rows={4}
  />
        <button className="bg-button hover:bg-accent text-white font-semibold py-3 rounded-lg transition-colors duration-200">
          Send Message
        </button>
      </form>
    </section>
  );
});

export default Contact;
