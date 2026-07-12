import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HomeImage from '../../assets/Images/HomePageImage.jfif'

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] pt-24">
      {/* Background Decorations */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#E8D7C3]/40 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#F5E9DA] blur-3xl"></div>

      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col-reverse items-center justify-between gap-12 px-6 py-10 lg:flex-row lg:px-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <span className="rounded-full bg-[#C79A63]/20 px-4 py-2 text-sm font-medium text-[#8B5E3C]">
            ✨ Premium Home Decor Collection
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-[#3E2C23] md:text-6xl">
            Transform Your
            <span className="block text-[#8B5E3C]">
              Home Into Art
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover handcrafted idols, elegant décor pieces, premium vases,
            candles, and timeless accessories designed to bring warmth,
            beauty, and serenity into every corner of your home.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-full bg-[#8B5E3C] px-7 py-3 text-white transition duration-300 hover:scale-105 hover:bg-[#70472B]">
              Shop Now
            </button>

            <button className="flex items-center gap-2 rounded-full border border-[#8B5E3C] px-7 py-3 text-[#8B5E3C] transition duration-300 hover:bg-[#8B5E3C] hover:text-white">
              Explore Collection
              <ArrowRight size={18} />
            </button>
          </div>

          {/* <div className="mt-12 flex gap-10">
            <div>
              <h3 className="text-3xl font-bold text-[#8B5E3C]">500+</h3>
              <p className="text-gray-600">Premium Products</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#8B5E3C]">10k+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#8B5E3C]">4.9★</h3>
              <p className="text-gray-600">Customer Rating</p>
            </div>
          </div> */}
        </motion.div>

        {/* Right Image */}
        {/* Right Image */}
<motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative flex justify-center items-center"
>
  {/* Background Glow */}
  <div className="absolute h-[520px] w-[520px] rounded-full bg-[#E8D7C3]/60 blur-3xl"></div>

  {/* Decorative Border */}
  <div className="absolute h-[470px] w-[370px] rounded-[45px] border-2 border-[#C79A63]/30"></div>

  {/* Main Image */}
  <img
    src={HomeImage}
    alt="Luxury Home Decor"
    className="relative z-10 h-[500px] w-[400px] rounded-[35px] object-cover shadow-[0_30px_60px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-2 hover:scale-105"
  />

  {/* Floating Card */}
  <div className="absolute -bottom-6 -left-6 z-20 rounded-2xl bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md">
    <p className="text-xs uppercase tracking-widest text-[#8B5E3C]">
      New Arrival
    </p>
    <h3 className="mt-1 text-lg font-semibold text-[#3E2C23]">
      Elegant Decor
    </h3>
  </div>

  {/* Small Decorative Circle */}
  <div className="absolute -top-5 -right-5 h-20 w-20 rounded-full bg-[#C79A63]/20"></div>
</motion.div>
      </div>
    </section>
  );
};

export default Hero;