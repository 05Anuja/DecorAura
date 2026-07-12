// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";
// import ProductCard from "../product/ProductCard";
// import { getFeaturedProducts } from "../../services/productService";

// const FeaturedProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchFeaturedProducts = async () => {
//     try {
//       const response = await getFeaturedProducts();

//       // Assuming backend returns:
//       // { success: true, products: [...] }

//       setProducts(response.products || []);
//     } catch (error) {
//       console.error("Error fetching featured products:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchFeaturedProducts();
//   }, []);

//   return (
//     <section className="bg-[#FAF7F2] py-20">
//       <div className="mx-auto max-w-7xl px-6 lg:px-10">
//         {/* Heading */}
//         <div className="mb-12 flex items-center justify-between">
//           <div>
//             <p className="text-sm uppercase tracking-[3px] text-[#8B5E3C]">
//               DecorAura Collection
//             </p>

//             <h2 className="mt-2 text-4xl font-bold text-[#3E2C23]">
//               Featured Products
//             </h2>

//             <p className="mt-3 max-w-xl text-gray-600">
//               Explore our handpicked collection of premium home décor,
//               handcrafted idols, scented candles, flower pots and elegant
//               decorative pieces.
//             </p>
//           </div>

//           <Link
//             to="/shop"
//             className="hidden items-center gap-2 rounded-full border border-[#8B5E3C] px-5 py-3 text-[#8B5E3C] transition hover:bg-[#8B5E3C] hover:text-white lg:flex"
//           >
//             View All
//             <ArrowRight size={18} />
//           </Link>
//         </div>

//         {/* Loading */}
//         {loading ? (
//           <div className="flex justify-center py-20">
//             <p className="text-lg text-gray-500">
//               Loading products...
//             </p>
//           </div>
//         ) : (
//           <>
//             {/* Products */}
//             <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//               {products.map((product) => (
//                 <ProductCard
//                   key={product._id}
//                   product={product}
//                 />
//               ))}
//             </div>

//             {/* Mobile Button */}
//             <div className="mt-10 flex justify-center lg:hidden">
//               <Link
//                 to="/shop"
//                 className="flex items-center gap-2 rounded-full border border-[#8B5E3C] px-5 py-3 text-[#8B5E3C] transition hover:bg-[#8B5E3C] hover:text-white"
//               >
//                 View All
//                 <ArrowRight size={18} />
//               </Link>
//             </div>
//           </>
//         )}
//       </div>
//     </section>
//   );
// };

// export default FeaturedProducts;

import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "../Product/ProductCard.jsx";
import products from "../../data/productData.js";

const FeaturedProducts = () => {
  return (
    <section className="bg-[#FAF7F2] py-20">

      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <div className="mb-12 flex flex-col items-center justify-between gap-5 text-center lg:flex-row lg:text-left">

          <div>

            <span className="text-sm uppercase tracking-[3px] text-[#8B5E3C]">
              Handpicked Collection
            </span>

            <h2 className="mt-3 text-4xl font-bold text-[#3E2C23]">
              Featured Products
            </h2>

            <p className="mt-4 max-w-xl text-gray-600">
              Discover our premium collection of handcrafted idols,
              elegant décor pieces, scented candles, flower pots,
              fragrances and timeless accessories for every home.
            </p>

          </div>

          <Link
            to="/shop"
            className="hidden items-center gap-2 rounded-full border border-[#8B5E3C] px-6 py-3 text-[#8B5E3C] transition hover:bg-[#8B5E3C] hover:text-white lg:flex"
          >
            View All

            <ArrowRight size={18} />

          </Link>

        </div>

        {/* Products */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (

            <ProductCard
              key={product._id}
              product={product}
            />

          ))}

        </div>

        {/* Mobile Button */}

        <div className="mt-10 flex justify-center lg:hidden">

          <Link
            to="/shop"
            className="flex items-center gap-2 rounded-full border border-[#8B5E3C] px-6 py-3 text-[#8B5E3C] transition hover:bg-[#8B5E3C] hover:text-white"
          >
            View All

            <ArrowRight size={18} />

          </Link>

        </div>

      </div>

    </section>
  );
};

export default FeaturedProducts;