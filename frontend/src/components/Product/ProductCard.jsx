// import { Heart, ShoppingCart, Star } from "lucide-react";
// import { Link } from "react-router-dom";

// const ProductCard = ({ product }) => {
//   return (
//     <div className="group overflow-hidden rounded-3xl bg-white shadow-md transition duration-500 hover:-translate-y-2 hover:shadow-2xl">

//       {/* Product Image */}

//       <Link to={`/product/${product._id}`}>

//         <div className="relative overflow-hidden">

//           <img
//             src={product.images?.[0]}
//             alt={product.name}
//             className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
//           />

//           {/* Wishlist */}

//           <button className="absolute right-4 top-4 rounded-full bg-white p-2 shadow-lg transition hover:bg-red-500 hover:text-white">

//             <Heart size={18} />

//           </button>

//           {/* Discount */}

//           {product.discountPrice && (
//             <span className="absolute left-4 top-4 rounded-full bg-[#8B5E3C] px-3 py-1 text-xs font-semibold text-white">
//               SALE
//             </span>
//           )}

//         </div>

//       </Link>

//       {/* Product Details */}

//       <div className="p-5">

//         <p className="text-sm text-[#8B5E3C]">
//           {product.category?.name}
//         </p>

//         <h3 className="mt-2 line-clamp-2 text-lg font-semibold text-[#3E2C23]">
//           {product.name}
//         </h3>

//         {/* Rating */}

//         <div className="mt-2 flex items-center gap-1">

//           <Star
//             size={16}
//             className="fill-yellow-400 text-yellow-400"
//           />

//           <span className="text-sm text-gray-600">
//             {product.rating || 4.8}
//           </span>

//         </div>

//         {/* Price */}

//         <div className="mt-4 flex items-center gap-3">

//           <span className="text-xl font-bold text-[#3E2C23]">
//             ₹{product.discountPrice || product.price}
//           </span>

//           {product.discountPrice && (
//             <span className="text-gray-400 line-through">
//               ₹{product.price}
//             </span>
//           )}

//         </div>

//         {/* Button */}

//         <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#8B5E3C] py-3 text-white transition hover:bg-[#6F4529]">

//           <ShoppingCart size={18} />

//           Add To Cart

//         </button>

//       </div>
//     </div>
//   );
// };

// export default ProductCard;


import { Heart, ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

      {/* Image */}

      <Link to={`/product/${product._id}`}>

        <div className="relative overflow-hidden">

          <img
            src={product.images[0].url}
            alt={product.name}
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
          />

          <button className="absolute top-4 right-4 rounded-full bg-white p-2 shadow-md transition hover:bg-red-500 hover:text-white">

            <Heart size={18} />

          </button>

          {product.discountPrice && (
            <span className="absolute left-4 top-4 rounded-full bg-[#8B5E3C] px-3 py-1 text-xs font-semibold text-white">
              SALE
            </span>
          )}

        </div>

      </Link>

      {/* Details */}

      <div className="p-5">

        <p className="text-sm font-medium text-[#8B5E3C]">
          {product.category.name}
        </p>

        <h3 className="mt-1 text-lg font-semibold text-[#3E2C23] line-clamp-2">
          {product.name}
        </h3>

        <div className="mt-2 flex items-center gap-1">

          <Star
            size={16}
            className="fill-yellow-400 text-yellow-400"
          />

          <span className="text-sm text-gray-600">
            {product.rating}
          </span>

        </div>

        <div className="mt-3 flex items-center gap-3">

          <span className="text-xl font-bold text-[#3E2C23]">
            ₹{product.discountPrice}
          </span>

          <span className="text-gray-400 line-through">
            ₹{product.price}
          </span>

        </div>

        <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#8B5E3C] py-3 text-white transition hover:bg-[#6E4529]">

          <ShoppingCart size={18} />

          Add to Cart

        </button>

      </div>
    </div>
  );
};

export default ProductCard;