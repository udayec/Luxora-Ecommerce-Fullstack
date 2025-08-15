import { FaUndo, FaSync, FaTruck, FaHeadset } from "react-icons/fa";

const SectionOffer = () => {
  return (
    <section className="w-full py-10 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-800">
        <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <FaUndo size={36} className="mb-3 text-indigo-500" />
          <p className="text-lg font-semibold">Hassle-Free Returns</p>
        </div>
        <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <FaSync size={36} className="mb-3 text-teal-500" />
          <p className="text-lg font-semibold">Quick Swap Guarantee</p>
        </div>
        <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <FaTruck size={36} className="mb-3 text-orange-500" />
          <p className="text-lg font-semibold">Fast & Free Shipping</p>
        </div>
        <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <FaHeadset size={36} className="mb-3 text-rose-500" />
          <p className="text-lg font-semibold">Support Around Clock</p>
        </div>
      </div>
    </section>
  );
};

export default SectionOffer;

