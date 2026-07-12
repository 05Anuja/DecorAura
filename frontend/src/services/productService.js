import API from "./axios";

// Get Featured Products
export const getFeaturedProducts = async () => {
  const { data } = await API.get("/products/featured");
  return data;
};

// Get All Products
export const getAllProducts = async () => {
  const { data } = await API.get("/products");
  return data;
};

// Get Single Product
export const getProductById = async (id) => {
  const { data } = await API.get(`/products/${id}`);
  return data;
};

// Get Products By Category
export const getProductsByCategory = async (slug) => {
  const { data } = await API.get(`/products/category/${slug}`);
  return data;
};