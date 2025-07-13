export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  imageUrl: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

type NewProductData = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>;

const API_URL = 'http://localhost:5000/api';

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.error(`Failed to fetch data: ${error}`);
    return [];
  }
};

export const createProduct = async (
  newProduct: NewProductData
): Promise<Product> => {
  const response = await fetch(`${API_URL}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newProduct),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to create the product');
  }

  return response.json();
};
