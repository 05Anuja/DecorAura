import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Divine Idols",
    image:
      "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=300",
  },
  {
    id: 2,
    name: "Flower Pots",
    image:
      "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=300",
  },
  {
    id: 3,
    name: "Candles",
    image:
      "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=300",
  },
  {
    id: 4,
    name: "Perfumes",
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=300",
  },
  {
    id: 5,
    name: "Wall Decor",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300",
  },
  {
    id: 6,
    name: "Lighting",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300",
  },
  {
    id: 7,
    name: "Gift Collection",
    image:
      "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=300",
  },
  {
    id: 8,
    name: "Festive Decor",
    image:
      "https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?w=300",
  },
];

const Categories = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    let animation;

    const start = () => {
      animation = setInterval(() => {
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        } else {
          slider.scrollLeft += 1;
        }
      }, 15);
    };

    start();

    slider.addEventListener("mouseenter", () => clearInterval(animation));

    slider.addEventListener("mouseleave", start);

    return () => clearInterval(animation);
  }, []);

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-8">

        {/* <h2 className="text-4xl font-bold text-[#3E2C23] mb-10">
          Shop By Category
        </h2> */}

        <div
          ref={sliderRef}
          className="flex overflow-x-hidden whitespace-nowrap"
        >
          {[...categories, ...categories].map((category, index) => (
            <Link
              to={`/shop?category=${category.name}`}
              key={index}
              className="flex-shrink-0 w-40 text-center mx-1 group"
            >
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-gray-200 transition-all duration-300 group-hover:border-[#C79A63] group-hover:shadow-xl">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <h3 className="mt-4 text-lg font-medium text-gray-700 group-hover:text-[#8B5E3C] transition">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;