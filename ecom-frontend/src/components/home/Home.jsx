import { useDispatch, useSelector } from "react-redux";
import HeroBanner from "./HeroBanner";
import { useEffect } from "react";
import { fetchProducts } from "../../store/actions";
import ProductCard from "../shared/ProductCard";
import Loader from "../shared/Loader";
import { FaArrowRight, FaExclamationTriangle, FaFireAlt, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import SectionOffer from "../shared/sectionOffer";
import { MessageCircle } from "lucide-react";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { isLoading, errorMessage } = useSelector((state) => state.errors);
 
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="lg:px-14 sm:px-8 px-4">
      <div className="py-6">
        <HeroBanner />

      {/* Hero Heading Section */}
    <div className="text-center mt-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-400 drop-shadow-lg">
        Discover the Style That Defines You
      </h1>
      <p className="mt-2 text-base md:text-lg text-slate-600 font-medium max-w-3xl mx-auto">
        From everyday essentials to standout pieces, Luxora brings fashion, comfort, and elegance to your doorstep.
      </p>
    </div>


        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mt-10 justify-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-3 px-7 py-3 text-lg bg-gradient-to-r from-pink-400 to-purple-500 text-white rounded-2xl font-semibold shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <FaFireAlt className="text-xl" />
            Shop the Look
          </Link>

          <Link
            to="/about"
            className="inline-flex items-center gap-3 px-7 py-3 text-lg border-2 border-purple-400 text-purple-700 rounded-2xl font-medium hover:bg-purple-50 hover:scale-105 hover:shadow-md transition-transform duration-300"
          >
            <FaInfoCircle className="text-xl" />
            Why Choose Luxora?
          </Link>
        </div>
      </div>

      <SectionOffer/>

      {/* Product Grid or Loading/Error */}
      {isLoading ? (
        <Loader />
      ) : errorMessage ? (
        <div className="flex justify-center items-center h-[200px]">
          <FaExclamationTriangle className="text-slate-800 text-3xl mr-2" />
          <span className="text-slate-800 text-lg font-medium">
            {errorMessage}
          </span>
        </div>
      ) : (
        <div className="pb-6 pt-14 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-6">
          {products &&
            products
              .slice(0, 3)
              .map((item, i) => <ProductCard key={i} {...item} />)}
        </div>
      )}

       {/* Final Call to Action */}
      <div className="mt-18 pb-16 mg-16 text-center">
    <h3 className="text-2xl font-bold text-slate-800 mb-2">
      Ready to upgrade your Tech/Fashion game?
    </h3>
    <p className="text-slate-600 mb-6">
      Start exploring, start upgrading — the future is waiting in your cart.
    </p>

    {/* Primary CTA */}
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

export default Home;

