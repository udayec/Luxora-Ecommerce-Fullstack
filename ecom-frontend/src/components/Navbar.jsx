import { Badge } from "@mui/material";
import { useState } from "react";
import {
  FaShoppingCart,
  FaSignInAlt,
  FaStore,
  FaEllipsisV,
  FaBars,
  FaTimes,
  FaEnvelope,
  FaHeadset,
  FaPhoneAlt,
} from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import UserMenu from "./shared/UserMenu";

const Navbar = () => {
  const path = useLocation().pathname;
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const { cart } = useSelector((state) => state.carts);
  const { user } = useSelector((state) => state.auth);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "Cart", path: "/cart", isCart: true },
  ];

  return (
    <div className="h-[70px] bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white z-60 flex items-center sticky top-0 shadow-lg">
      <div className="lg:px-14 sm:px-8 px-4 w-full flex justify-between items-center relative">
        <Link
          to="/about"
          className="flex items-center text-3xl font-bold tracking-tight active:scale-95 transition-transform"
        >
          <GiShoppingBag className="mr-2 text-4xl text-indigo-400 animate-bounce drop-shadow-sm" />
          <span className="font-[Playfair Display] bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow">
            Luxora
          </span>
        </Link>

        {/* Nav Links */}
        <div className="ml-auto flex items-center gap-4">
          <ul
            className={`flex sm:gap-10 gap-4 sm:items-center items-center text-slate-800 sm:static absolute left-0 top-full sm:shadow-none shadow-lg
            ${navbarOpen ? "h-fit sm:pb-0 pb-5 pt-5" : "h-0 overflow-hidden"}
            transition-all duration-200 sm:h-fit bg-gradient-to-r from-[#141e30] via-[#243b55] to-[#141e30] text-white sm:w-fit w-full sm:flex-row flex-col px-4 sm:px-0 backdrop-blur-md border-t border-white/10`}
          >
            {navLinks.map((item) => (
              <li
                key={item.path}
                className="font-medium transition-all duration-300"
              >
                {item.isCart ? (
                  <Link
                    to={item.path}
                    className={`px-4 py-2 transition-all duration-300 flex items-center gap-2
                      ${
                        path === item.path
                          ? "bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white font-semibold shadow-md scale-105"
                          : "text-slate-100 hover:text-amber-300 hover:underline underline-offset-8 decoration-2"
                      }`}
                  >
                    <Badge
                      showZero
                      badgeContent={cart?.length || 0}
                      color="primary"
                      overlap="circular"
                      anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    >
                      <FaShoppingCart size={22} />
                    </Badge>
                    <span className="hidden sm:inline">Cart</span>
                  </Link>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-4 py-2 transition-all duration-300
                      ${
                        path === item.path
                          ? "bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white font-semibold shadow-md scale-105"
                          : "text-slate-100 hover:text-amber-300 hover:underline underline-offset-8 decoration-2"
                      }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}

            {/* Login/Logout */}
            { (user && user.id) ? (
              <li className="ml-2 font-medium transition-all duration-300 flex items-center">
                <h3><UserMenu/></h3>
              </li>
            ) : (
              <li className="font-medium transition-all duration-300">
                <Link
                  to="/login"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white font-semibold shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                  <FaSignInAlt />
                  <span>Login</span>
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* Hamburger button */}
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="sm:hidden text-white text-2xl"
        >
          {navbarOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Contact icon link (replaces dropdown) */}
        <Link
          to="/contact"
          className="ml-4 flex items-center px-3 py-2 hover:bg-white/10 text-white transition"
        >
          <FaPhoneAlt size={20} />
        </Link>

      </div>
    </div>
  );
};

export default Navbar;

