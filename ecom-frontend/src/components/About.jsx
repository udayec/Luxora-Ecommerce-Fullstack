import { Link } from "react-router-dom";
import { FaArrowRight, FaUserAlt } from "react-icons/fa";
import ProductCard from "./shared/ProductCard";
import { FiSearch } from "react-icons/fi";
import { MessageCircle } from "lucide-react"; 
import SectionOffer from "./shared/sectionOffer";
import { about, firebolt, iphone, luxora1, luxora2, pixel } from "../utils/constants";


const products = [
  {
    image: iphone,
    productName: "iPhone 13 Pro Max",
    description:
      "Experience next-level performance with the A15 Bionic chip, immersive display, and pro-grade camera system.",
    specialPrice: 72000,
    price: 78000,
    quantity: 10,
  },
  {
    image: firebolt,
    productName: "Fire-Boltt Ninja Smart Watch",
    description: "1.69” display, heart rate monitoring, and 100+ watch faces.",
    specialPrice: 1799,
    price: 2999,
    quantity: 25,
  },
  {
    image: pixel,
    productName: "Google Pixel 6",
    description:
      "Powered by Google’s Tensor chip, Pixel 6 delivers smart photography, smooth performance, and clean Android UI.",
    price: 599,
    specialPrice: 400,
    quantity: 10,
  },
];

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 text-transparent bg-clip-text drop-shadow-sm mb-4">
          Welcome to Luxora
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6">
          Where cutting-edge tech meets stunning design. Dive into a new era of e-commerce where everything is curated, quick, and downright irresistible.
        </p>

        {/* Start Shopping Button */}
        <Link
          to="/products"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-yellow-400 text-black font-semibold shadow-lg hover:scale-105 transition duration-300"
        >
         <FiSearch className="text-lg"/> Find Your Style 
        </Link>
      </div>

      {/* Why We Exist */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 mb-24">
        {/* Text Section */}
        <div className="md:w-1/2 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-6 rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold text-slate-800 mb-4">Why We Exist</h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            At <span className="text-blue-600 font-medium">Luxora</span>, we’re not just about products ! we’re about passion.
            From flagship smartphones to timeless tech gadgets, we pick only the best for people who expect the best.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Join thousands of loyal customers who shop smart, live stylish, and trust Luxora to deliver the future.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 relative">
          <img
            src= {luxora2}
            alt="About Us"
            className="w-full h-auto rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:rotate-1"
          />
        </div>
      </div>

      {/* Offer Highlight Section */}
      <SectionOffer />


      {/* Divider */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-800 mb-3">✨ Featured Products</h2>
        <p className="text-slate-600 max-w-xl mx-auto">
          Tech that turns heads. Performance that turns pro. These handpicked products are your next obsession.
        </p>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            productName={product.productName}
            description={product.description}
            specialPrice={product.specialPrice}
            price={product.price}
            quantity={product.quantity}
            about
          />
        ))}
      </div>

      {/* Final Call to Action */}
    <div className="mt-24 text-center">
  <h3 className="text-2xl font-bold text-slate-800 mb-2">
    Ready to upgrade your Tech/Fashion game?
  </h3>
  <p className="text-slate-600 mb-6">
    Start exploring, start upgrading — the future is waiting in your cart.
  </p>

*  {/* Primary CTA */}
  <Link
    to="/products"
    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition duration-300"
  >
    Experience Luxora! Shop Now <FaArrowRight />
  </Link>

  {/* Secondary CTA */}
<div className="mt-4">
  <Link
    to="/contact"
    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 font-medium rounded-lg border border-slate-300 shadow-sm hover:bg-slate-200 hover:scale-105 transition duration-200"
  >
    <MessageCircle className="w-4 h-4 text-slate-600" />
    Need Help?
  </Link>
</div>
</div>

  </div>
  );
};

export default About;
