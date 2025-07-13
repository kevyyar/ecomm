import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createProduct, type Product } from '../../api/products';
import { useForm } from 'react-hook-form';

type ProductFormData = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>;

const ProductForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProductFormData>();

  const queryClient = useQueryClient();

  const {
    mutate,
    isPending,
    error: mutationError,
  } = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      console.log(`Succesfully created a product`);
      queryClient.invalidateQueries({ queryKey: ['products'] });
      reset();
    },
  });

  const onSubmit = (data: ProductFormData) => {
    const formData = {
      ...data,
      price: Number(data.price),
      stock: Number(data.stock),
    };

    mutate(formData);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mb-8 p-4 border rounded-lg shadow-sm"
    >
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      {mutationError && (
        <p className="text-red-500 mb-2">Error: {mutationError.message}</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            {...register('name', { required: 'Product name is required' })}
            placeholder="Product Name"
            className="p-2 border rounded w-full"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <input
            type="number"
            {...register('price', {
              required: 'Price is required',
              min: { value: 0, message: 'Price cannot be negative' },
            })}
            placeholder="Price"
            className="p-2 border rounded w-full"
            step="0.01"
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
          )}
        </div>
        <div>
          <input
            type="number"
            {...register('stock', {
              required: 'Stock is required',
              min: { value: 0, message: 'Stock cannot be negative' },
            })}
            placeholder="Stock"
            className="p-2 border rounded w-full"
          />
          {errors.stock && (
            <p className="text-red-500 text-sm mt-1">{errors.stock.message}</p>
          )}
        </div>
        <div className="md:col-span-2">
          <textarea
            {...register('description', {
              required: 'Description is required',
            })}
            placeholder="Description"
            className="p-2 border rounded w-full"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors disabled:bg-gray-400"
        disabled={isPending}
      >
        {isPending ? 'Adding...' : 'Add Product'}
      </button>
    </form>
  );
};

export default ProductForm;
