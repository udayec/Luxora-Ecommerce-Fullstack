import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-16 px-4 bg-gradient-to-br from-pink-100 to-yellow-50">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-pink-600 mb-6">
          Get in Touch
        </h1>

        <p className="text-gray-700 text-center mb-10 text-lg">
        Have questions about your order or need help? Fill out the form and we’ll get back to you shortly.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1">
            <label className="block text-sm font-semibold text-gray-800 mb-1">Full Name</label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded-xl p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Your Name"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-semibold text-gray-800 mb-1">Email Address</label>
            <input
              type="email"
              required
              className="w-full border border-gray-300 rounded-xl p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="example@email.com"
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-semibold text-gray-800 mb-1">Message</label>
            <textarea
              rows="5"
              required
              className="w-full border border-gray-300 rounded-xl p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Write your message here..."
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-yellow-400 text-black text-lg font-semibold py-3 rounded-xl hover:brightness-110 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="mt-12 border-t pt-8 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Customer Support</h2>
          <div className="flex flex-col sm:flex-row sm:justify-center items-center gap-6 text-gray-700 text-base">
            <div className="flex items-center gap-2">
              <FaPhone className="text-pink-500" />
              <span>+91 8871 301 625</span>
            </div>

            <div className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-500" />
              <span>support@eshop.in</span>
            </div>

            <div className="flex items-center gap-2">
              <FaMapMarkedAlt className="text-pink-500" />
              <span>Mumbai, Maharashtra, India</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;



