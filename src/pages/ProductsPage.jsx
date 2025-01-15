import { useState } from 'react';
import { Filter, ChevronDown, Star } from 'lucide-react';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  
  const categories = [
    { id: 'face', name: 'Face Care', count: 24 },
    { id: 'body', name: 'Body Care', count: 18 },
    { id: 'hair', name: 'Hair Care', count: 15 },
    { id: 'fragrance', name: 'Fragrance', count: 12 },
  ];

  const products = [
    {
      id: 1,
      name: 'Kumkumadi Face Oil',
      category: 'face',
      price: 1299,
      rating: 4.8,
      reviews: 128,
      image: 'https://via.placeholder.com/300',
      tag: 'Bestseller'
    },
    // Add more products as needed
  ];

  const colors = {
    blackOlive: '#3B3C36',
    chestnut: '#954535',
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2" style={{ color: colors.blackOlive }}>
            Our Products
          </h1>
          <p className="text-gray-600">Discover our range of authentic Ayurvedic beauty products</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Filters</h2>
                <Filter className="w-5 h-5" />
              </div>

              <div className="mb-8">
                <h3 className="font-medium mb-4">Categories <ChevronDown className="inline w-4 h-4 ml-1" /></h3>
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left py-2 px-3 rounded-md mb-2 flex justify-between items-center ${
                      selectedCategory === category.id ? `bg-${colors.chestnut}/10 text-${colors.chestnut}` : 'hover:bg-gray-100'
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className="text-sm text-gray-500">({category.count})</span>
                  </button>
                ))}
              </div>

              <div className="mb-8">
                <h3 className="font-medium mb-4">Price Range <ChevronDown className="inline w-4 h-4 ml-1" /></h3>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
                <div className="flex justify-between mt-2">
                  <span>₹{priceRange[0]}</span>
                  <span>₹{priceRange[1]}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative">
                    <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                    {product.tag && (
                      <span className="absolute top-4 right-4 bg-chestnut text-white px-3 py-1 rounded-full text-sm">
                        {product.tag}
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm">{product.rating}</span>
                      <span className="ml-2 text-sm text-gray-500">({product.reviews} reviews)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">₹{product.price}</span>
                      <button className="bg-chestnut text-white px-4 py-2 rounded-md hover:bg-chestnut/90 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
