import ProductForm from './features/products/ProductForm';
import ProductList from './features/products/ProductList';

function App() {
  return (
    <div className="container mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center">E-Commerce Store</h1>
      </header>
      <main>
        <ProductForm />
        <ProductList />
      </main>
    </div>
  );
}

export default App;
