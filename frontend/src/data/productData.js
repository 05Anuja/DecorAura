// import Ganapati from "../assets/Images/HomePageImage.jfif";
// import Ganapati from '../assets/Images/HomePageImage.jfif'
import Buddha from "../assets/Images/HomePageImage.jfif";
import Candle from "../assets/Images/HomePageImage.jfif";
import FlowerPot from "../assets/Images/HomePageImage.jfif";
import Perfume from "../assets/Images/HomePageImage.jfif";
import Vase from "../assets/Images/HomePageImage.jfif";
import WallDecor from "../assets/Images/HomePageImage.jfif";
import Lamp from "../assets/Images/HomePageImage.jfif";
import Ganapati from '../assets/Products/Ganapati.jfif'

console.log(Ganapati)

const products = [
  {
    _id: "1",
    name: "Golden Ganapati Idol",
    category: {
      name: "Divine Idols",
    },
    price: 2499,
    discountPrice: 1999,
    rating: 4.9,
    images: [{ url: Ganapati }],
  },
  {
    _id: "2",
    name: "Meditating Buddha Statue",
    category: {
      name: "Divine Idols",
    },
    price: 1899,
    discountPrice: 1599,
    rating: 4.8,
    images: [{ url: Buddha }],
  },
  {
    _id: "3",
    name: "Lavender Scented Candle",
    category: {
      name: "Candles",
    },
    price: 599,
    discountPrice: 449,
    rating: 4.7,
    images: [{ url: Candle }],
  },
  {
    _id: "4",
    name: "Ceramic Flower Pot",
    category: {
      name: "Flower Pots",
    },
    price: 999,
    discountPrice: 799,
    rating: 4.8,
    images: [{ url: FlowerPot }],
  },
  {
    _id: "5",
    name: "Luxury Reed Diffuser",
    category: {
      name: "Fragrances",
    },
    price: 1499,
    discountPrice: 1299,
    rating: 4.9,
    images: [{ url: Perfume }],
  },
  {
    _id: "6",
    name: "Minimal Ceramic Vase",
    category: {
      name: "Home Decor",
    },
    price: 1299,
    discountPrice: 999,
    rating: 4.8,
    images: [{ url: Vase }],
  },
  {
    _id: "7",
    name: "Metal Wall Decor",
    category: {
      name: "Wall Decor",
    },
    price: 2999,
    discountPrice: 2499,
    rating: 4.9,
    images: [{ url: WallDecor }],
  },
  {
    _id: "8",
    name: "Modern Table Lamp",
    category: {
      name: "Lighting",
    },
    price: 1799,
    discountPrice: 1499,
    rating: 4.8,
    images: [{ url: Lamp }],
  },
];

export default products;