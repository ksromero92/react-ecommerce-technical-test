const API_URL = "https://dummyjson.com/products/category/smartphones";

export async function getProducts() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("No fue posible cargar los productos");
  }

  const data = await response.json();

  return data.products;
}
