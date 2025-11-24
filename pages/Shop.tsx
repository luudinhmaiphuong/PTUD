import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Star, ChevronDown } from "lucide-react";
import { categories, products } from "../data";

const Shop: React.FC = () => {
  const [priceRange, setPriceRange] = useState(95000);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); //Thêm state lưu danh mục đang chọn
  //chọn nhiều danh mục
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  //đánh giá
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  //logic lọc sp
  const filteredProducts = products.filter((p) => {
    const matchCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(p.category);
    const matchPrice = p.price <= priceRange;
    const matchRating = selectedRating === null || p.rating >= selectedRating;

    return matchCategory && matchPrice && matchRating;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="mb-8 text-sm text-gray-500">
        <Link to="/" className="hover:text-pink-500">
          Trang chủ
        </Link>
        <span className="mx-2">/</span>
        <span className="font-bold text-textMain">Cửa hàng</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4 space-y-8">
          {/* Categories */}
          <div>
            <h3 className="font-bold text-gray-500 uppercase tracking-wider mb-4 text-sm border-l-4 border-pink-300 pl-3">
              Danh mục sản phẩm
            </h3>

            <ul className="space-y-1 border-t border-gray-100">
              {categories.map((cat) => (
                <li key={cat.id} className="border-b border-gray-100 py-2">
                  <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 hover:text-pink-500">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat.name)}
                      onChange={() => {
                        setSelectedCategories((prev) =>
                          prev.includes(cat.name)
                            ? prev.filter((c) => c !== cat.name)
                            : [...prev, cat.name]
                        );
                      }}
                      className="accent-pink-400 w-4 h-4"
                    />
                    <span>{cat.name}</span>

                    <span className="ml-auto text-gray-400 text-xs">
                      ({products.filter((p) => p.category === cat.name).length})
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Filter */}
          <div>
            <h3 className="font-bold text-gray-500 uppercase tracking-wider mb-4 text-sm border-l-4 border-pink-300 pl-3">
              Giá
            </h3>
            <input
              type="range"
              min="0"
              max="200000"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer text-pink-500"
            />
            <div className="flex justify-between items-center mt-4">
              {/* <button className="bg-gray-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase hover:bg-gray-700">
                Lọc
              </button> */}
              <span className="text-sm text-gray-500">
                Giá: 18.000 ₫ — {priceRange.toLocaleString("vi-VN")} ₫
              </span>
            </div>
          </div>

          {/* Rating Filter */}
          <div
            className="flex items-center gap-2 text-sm text-gray-500 cursor-pointer hover:text-pink-500"
            onClick={() => setSelectedRating(5)}
          >
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={16} fill="currentColor" />
              ))}
            </div>
            {/* <span>(21)</span> //cái này là ghi cứng*/}
            <span>({products.filter((p) => p.rating === 5).length})</span>
          </div>
        </div>

        {/* Product Grid */}
        <div className="w-full lg:w-3/4">
          {/* Toolbar */}
          <div className="flex justify-between items-center mb-6">
            {/* update số lượng kết quả */}
            <div className="text-sm text-gray-500">
              Hiển thị {filteredProducts.length} kết quả
            </div>

            <div className="relative">
              <select className="appearance-none border border-gray-200 rounded px-4 py-2 pr-8 text-sm text-gray-600 focus:outline-none focus:border-pink-300">
                <option>Sắp xếp mặc định</option>
                <option>Thứ tự theo mức độ phổ biến</option>
                <option>Thứ tự theo điểm đánh giá</option>
                <option>Mới nhất</option>
                <option>Thứ tự theo giá: thấp đến cao</option>
                <option>Thứ tự theo giá: cao đến thấp</option>
              </select>
              <ChevronDown
                size={14}
                className="absolute right-3 top-3 text-gray-400 pointer-events-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* dùng filteredProducts */}
            {filteredProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="relative overflow-hidden rounded-lg mb-3 border border-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-square object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.discount && (
                    <span className="absolute top-2 left-2 bg-red-400 text-white text-xs font-bold px-2 py-1 rounded">
                      Giảm giá!
                    </span>
                  )}
                  <div className="absolute top-2 right-2 bg-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <img
                      src=""
                      alt="logo-mini"
                      className="w-6 h-6 rounded-full"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs text-gray-400 uppercase">
                    {product.category}
                  </div>
                  <h3 className="font-medium text-gray-700 text-base h-12 line-clamp-2 group-hover:text-pink-500 transition-colors">
                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                  </h3>

                  {/* Stars */}
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={14}
                        className={
                          star <= product.rating
                            ? "text-yellow-300"
                            : "text-gray-200"
                        }
                        fill={star <= product.rating ? "currentColor" : "none"}
                      />
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    {product.originalPrice && (
                      <span className="text-gray-400 line-through text-sm">
                        {product.originalPrice.toLocaleString("vi-VN")} ₫
                      </span>
                    )}
                    <span className="text-black font-bold text-lg">
                      {product.price.toLocaleString("vi-VN")} ₫
                    </span>
                    <span className="text-gray-400 text-xs">VAT</span>
                  </div>

                  <button className="w-full bg-pink-300 text-white font-bold text-xs uppercase py-2 rounded hover:bg-pink-400 transition-colors mt-2">
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
