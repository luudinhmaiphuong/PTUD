import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, Facebook, Twitter, Mail, Linkedin, ChevronRight, Minus, Plus, CheckCircle2 } from 'lucide-react';
import { products } from '../data';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === Number(id)) || products[0];
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'reviews'>('desc');

  const handleQuantityChange = (val: number) => {
    if (quantity + val >= 1) setQuantity(quantity + val);
  };

  // Debug log
  console.log('Product ID from URL:', id);
  console.log('Found product:', product);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-pink-500">Trang chủ</Link>
        <ChevronRight size={14} />
        <Link to="/shop" className="hover:text-pink-500">{product.category}</Link>
        <ChevronRight size={14} />
        <span className="text-gray-800 font-medium">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Image Section - FIXED: Removed duplicate absolute positioning */}
        <div className="relative">
            <div className="rounded-lg overflow-hidden border border-gray-100 shadow-sm relative group">
                <img src={product.image} alt={product.name} className="w-full h-auto object-cover" />
                {product.discount && (
                    <span className="absolute top-4 left-4 bg-red-400 text-white text-sm font-bold px-3 py-1 rounded shadow-sm">
                        Giảm giá!
                    </span>
                )}
                {/* Zoom icon */}
                <div className="absolute bottom-4 right-4">
                     <div className="w-10 h-10 bg-black/30 text-white rounded-full flex items-center justify-center border border-white/50 backdrop-blur-sm cursor-pointer hover:bg-black/50 transition">
                        <span className="text-xs">🔍</span>
                     </div>
                </div>
                {/* Category label */}
                <div className="absolute bottom-4 left-4 text-white/90 font-serif italic text-xl drop-shadow-md bg-black/20 px-3 py-1 rounded backdrop-blur-sm">
                     {product.category}
                </div>
            </div>
        </div>

        {/* Info Section */}
        <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-700 mb-2">{product.name}</h1>
            <div className="w-12 h-1 bg-gray-200 mb-4"></div>
            
            <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400 text-sm">
                    {[1,2,3,4,5].map(s => (
                        <Star key={s} size={16} fill={s <= product.rating ? "currentColor" : "none"} className={s > product.rating ? "text-gray-300" : ""} />
                    ))}
                </div>
                <span className="text-gray-400 text-sm">(1 đánh giá của khách hàng)</span>
            </div>

            <div className="flex items-end gap-3 mb-6">
                {product.originalPrice && (
                    <span className="text-gray-400 line-through text-lg">{product.originalPrice.toLocaleString('vi-VN')} ₫</span>
                )}
                <span className="text-3xl font-bold text-gray-800">{product.price.toLocaleString('vi-VN')} ₫</span>
                <span className="text-gray-500 text-sm font-medium mb-1">VAT</span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
                Bồ hóng cài hoa handmade – tinh nghịch, ngọt ngào, decor độc đáo dễ thương. 
                Sản phẩm được làm thủ công tỉ mỉ từ những sợi len mềm mại nhất.
            </p>

            <div className="text-green-500 text-sm font-bold mb-6">Còn 20 trong kho</div>

            <div className="flex gap-4 mb-8 flex-wrap">
                <div className="flex items-center border border-gray-200 rounded">
                    <button onClick={() => handleQuantityChange(-1)} className="px-3 py-2 hover:bg-gray-50 transition"><Minus size={14} /></button>
                    <input type="text" value={quantity} readOnly className="w-10 text-center text-gray-700 outline-none" />
                    <button onClick={() => handleQuantityChange(1)} className="px-3 py-2 hover:bg-gray-50 transition"><Plus size={14} /></button>
                </div>
                <button className="bg-pink-400 text-white px-8 py-2 rounded font-bold uppercase text-sm hover:bg-pink-500 transition shadow-md">
                    Thêm vào giỏ hàng
                </button>
                <Link to="/checkout" className="bg-pink-200 text-pink-600 px-8 py-2 rounded font-bold uppercase text-sm hover:bg-pink-300 hover:text-white transition">
                    Mua ngay
                </Link>
            </div>

            <div className="border-t border-gray-100 pt-6 space-y-2 text-sm text-gray-500">
                <div className="flex gap-2">
                    <span className="font-bold text-gray-700">SKU:</span>
                    <span>PK6</span>
                </div>
                <div className="flex gap-2">
                    <span className="font-bold text-gray-700">Danh mục:</span>
                    <span className="text-pink-500">{product.category}</span>
                </div>
                <div className="flex gap-3 mt-4">
                    <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition cursor-pointer"><Facebook size={14} /></div>
                    <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-sky-400 hover:text-white transition cursor-pointer"><Twitter size={14} /></div>
                    <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-red-500 hover:text-white transition cursor-pointer"><Mail size={14} /></div>
                    <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition cursor-pointer"><span className="font-bold font-serif">P</span></div>
                    <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-blue-700 hover:text-white transition cursor-pointer"><Linkedin size={14} /></div>
                </div>
            </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-t border-gray-100 pt-12">
         <div className="flex gap-8 border-b border-gray-200 mb-8">
            <button 
                className={`pb-4 text-sm font-bold uppercase tracking-wide border-b-2 transition-colors ${activeTab === 'desc' ? 'border-pink-400 text-gray-800' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
                onClick={() => setActiveTab('desc')}
            >
                Mô tả
            </button>
            <button 
                className={`pb-4 text-sm font-bold uppercase tracking-wide border-b-2 transition-colors ${activeTab === 'reviews' ? 'border-pink-400 text-gray-800' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
                onClick={() => setActiveTab('reviews')}
            >
                Đánh giá (3)
            </button>
         </div>

         <div className="text-gray-600 text-sm leading-7 max-w-4xl">
            {activeTab === 'desc' ? (
                <div className="space-y-4">
                    <p>Mang sự ngọt ngào của thiên nhiên kết hợp nét tinh nghịch với <strong>bồ hóng cài hoa handmade</strong>.</p>
                    <ul className="space-y-3 mt-4">
                        <li className="flex gap-2">
                            <span className="font-bold text-gray-700 min-w-[120px]">• Thiết kế đáng yêu:</span>
                            <span>Hình ảnh bồ hóng tí hon được cài thêm bông hoa nhỏ xinh, tạo cảm giác vừa dễ thương vừa tinh tế.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="font-bold text-gray-700 min-w-[120px]">• Chất liệu thủ công:</span>
                            <span>Len cotton mềm, bền và nhẹ, an toàn.</span>
                        </li>
                         <li className="flex gap-2">
                            <span className="font-bold text-gray-700 min-w-[120px]">• Ứng dụng đa dạng:</span>
                            <span>Có thể dùng làm charm trang trí, để bàn hoặc quà tặng độc đáo.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="font-bold text-gray-700 min-w-[120px]">• Quà tặng ý nghĩa:</span>
                            <span>Lý tưởng dành tặng fan Ghibli hoặc người yêu thích decor handmade.</span>
                        </li>
                    </ul>
                    <p className="mt-4">Một phụ kiện nhỏ nhắn nhưng mang lại nụ cười và sự dễ thương cho bất kỳ ai.</p>
                </div>
            ) : (
                <div>
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
                        <div>
                            <div className="flex items-center gap-2">
                                <strong className="text-gray-800">Khả Hân</strong>
                                <span className="text-xs text-gray-400">– 13 Tháng Mười, 2023</span>
                            </div>
                             <div className="flex text-yellow-400 text-xs mb-2">
                                {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="currentColor" />)}
                            </div>
                            <p>Sản phẩm rất xinh, đóng gói cẩn thận.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
                        <div>
                            <div className="flex items-center gap-2">
                                <strong className="text-gray-800">Minh Anh</strong>
                                <span className="text-xs text-gray-400">– 15 Tháng Mười, 2023</span>
                            </div>
                             <div className="flex text-yellow-400 text-xs mb-2">
                                {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="currentColor" />)}
                            </div>
                            <p>Shop tư vấn nhiệt tình, giao hàng nhanh.</p>
                        </div>
                    </div>
                </div>
            )}
         </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
          <h3 className="text-xl font-bold text-gray-600 uppercase mb-6">Sản phẩm tương tự</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             {products.slice(0, 4).map(p => (
                 <div key={p.id} className="group">
                     <div className="relative overflow-hidden rounded-lg mb-3">
                         <img src={p.image} alt={p.name} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" />
                     </div>
                     <h4 className="text-sm font-bold text-gray-700 group-hover:text-pink-500 transition-colors">
                        <Link to={`/product/${p.id}`}>{p.name}</Link>
                     </h4>
                     <div className="text-gray-500 text-xs font-bold mt-1">{p.price.toLocaleString('vi-VN')} ₫</div>
                 </div>
             ))}
          </div>
      </div>
    </div>
  );
};

export default ProductDetail;