const API_URL = "https://dummyjson.com/products";

export async function getProducts() {
  const response = await fetch(`${API_URL}/category/smartphones`);

  if (!response.ok) {
    throw new Error("No fue posible cargar los productos");
  }

  const data = await response.json();

  return data.products;
}

export async function getProductById(id) {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("No fue posible cargar el producto");
  }

  return response.json();
}
