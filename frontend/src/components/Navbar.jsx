import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
  HiOutlineMenuAlt3,
  HiOutlineX,
} from "react-icons/hi";

import {
  FiSearch,
  FiHeart,
  FiShoppingBag,
  FiUser,
} from "react-icons/fi";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Shop",
    path: "/shop",
  },
  {
    name: "Categories",
    path: "/categories",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: 'Review',
    path: '/review'
  }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/70 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="flex items-center justify-between h-20">

            {/* Logo */}

            <Link
              to="/"
              className="flex flex-col leading-none"
            >
              <h1 className="text-3xl font-serif font-bold text-[#6B4226]">
                DecorAura
              </h1>

              <span className="text-xs tracking-[3px] uppercase text-gray-500">
                Luxury Decor
              </span>
            </Link>

            {/* Desktop Nav */}

            <nav className="hidden lg:flex items-center gap-10">

              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative font-medium transition duration-300 ${
                      isActive
                        ? "text-[#8B5E3C]"
                        : "text-gray-700 hover:text-[#8B5E3C]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}

                      <span
                        className={`absolute left-0 -bottom-2 h-[2px] bg-[#C79A63] transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      ></span>
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Icons */}

            <div className="hidden lg:flex items-center gap-5">

              <button className="text-2xl hover:text-[#8B5E3C] transition">
                <FiSearch />
              </button>

              <button className="text-2xl hover:text-red-500 transition">
                <FiHeart />
              </button>

              <button className="relative text-2xl hover:text-[#8B5E3C] transition">

                <FiShoppingBag />

                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#C79A63] text-white text-xs flex items-center justify-center">
                  2
                </span>

              </button>

              <button className="text-2xl hover:text-[#8B5E3C] transition">
                <FiUser />
              </button>

            </div>

            {/* Mobile */}

            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="lg:hidden text-3xl text-[#6B4226]"
            >
              {openMenu ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
            </button>

          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}

      <AnimatePresence>

        {openMenu && (

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35 }}
            className="fixed top-0 right-0 h-screen w-72 bg-white shadow-2xl z-50 lg:hidden"
          >

            <div className="flex justify-end p-5">

              <button
                onClick={() => setOpenMenu(false)}
                className="text-3xl"
              >
                <HiOutlineX />
              </button>

            </div>

            <nav className="flex flex-col px-8 gap-8 mt-10">

              {navLinks.map((link) => (

                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setOpenMenu(false)}
                  className={({ isActive }) =>
                    `text-lg font-medium ${
                      isActive
                        ? "text-[#8B5E3C]"
                        : "text-gray-700"
                    }`
                  }
                >
                  {link.name}
                </NavLink>

              ))}

            </nav>

            <div className="flex justify-center gap-6 mt-16 text-2xl">

              <FiSearch />

              <FiHeart />

              <FiShoppingBag />

              <FiUser />

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
};

export default Navbar;