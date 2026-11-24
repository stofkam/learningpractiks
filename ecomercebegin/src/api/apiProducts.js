const BASE_URL = "http://localhost:3000/products";

export const api = {
    fetchProducts: async () => {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error("Products not found");
        }
        return response.json();
    },
    fetchProductId: async (id) => {
        const response = await fetch(`${BASE_URL}/${id}`);
        if (!response.ok) {
            throw new Error("Product not found");
        }
        return response.json();
    },
}