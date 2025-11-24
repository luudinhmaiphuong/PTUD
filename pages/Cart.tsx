import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, Minus, Plus, ArrowLeft } from 'lucide-react';
import { products } from '../data';

const Cart: React.FC = () => {
  // Mock cart state
  const [cartItems, setCartItems] = useState(products.slice(1, 3).map(p => ({...p, quantity: 1})));
  const navigate = useNavigate();

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item => {
        if (item.id === id) {
            const newQ = item.quantity + delta;
            return {...item, quantity: newQ < 1 ? 1 : newQ};
        }
        return item;
    }));
  };

  const removeItem = (id: number) => {
      setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cartItems.length === 0) {
      return (
        <div className="container mx-auto px-4 py-20 text-center">
            <div className="mb-6 flex justify-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center text-4xl">
                    🛒
                </div>
            </div>
            <p className="text-gray-500 mb-8">Chưa có sản phẩm nào trong giỏ hàng.</p>
            <Link 
                to="/shop" 
                className="bg-pink-300 text-white font-bold px-8 py-3 uppercase text-sm hover:bg-pink-400 transition shadow-md inline-block"
            >
                Quay trở lại cửa hàng
            </Link>
        </div>
      );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-700 mb-8">Giỏ hàng</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Table */}
          <div className="w-full lg:w-2/3">
              <div className="overflow-x-auto">
                  <table className="w-full border-collapse min-w-[600px]">
                      <thead>
                          <tr className="border-b border-gray-200">
                              <th className="text-left py-3 text-sm text-gray-500 font-bold uppercase tracking-wide">Sản phẩm</th>
                              <th className="text-center py-3 text-sm text-gray-500 font-bold uppercase tracking-wide">Giá</th>
                              <th className="text-center py-3 text-sm text-gray-500 font-bold uppercase tracking-wide">Số lượng</th>
                              <th className="text-right py-3 text-sm text-gray-500 font-bold uppercase tracking-wide">Tạm tính</th>
                              <th className="w-10"></th>
                          </tr>
                      </thead>
                      <tbody>
                          {cartItems.map(item => (
                              <tr key={item.id} className="border-b border-gray-100 group hover:bg-pink-50/20 transition">
                                  <td className="py-4 flex items-center gap-4">
                                      <Link to={`/product/${item.id}`} className="block w-16 h-16 flex-shrink-0 border border-gray-100 rounded overflow-hidden">
                                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                      </Link>
                                      <Link to={`/product/${item.id}`} className="font-bold text-gray-700 text-sm hover:text-pink-500 transition">
                                          {item.name}
                                      </Link>
                                  </td>
                                  <td className="py-4 text-center text-sm text-gray-600">
                                      {item.price.toLocaleString('vi-VN')} ₫
                                  </td>
                                  <td className="py-4 text-center">
                                      <div className="inline-flex items-center border border-gray-200 rounded bg-white">
                                          <button onClick={() => updateQuantity(item.id, -1)} className="px-2 py-1 hover:bg-gray-50 text-gray-500"><Minus size={12} /></button>
                                          <input type="text" value={item.quantity} readOnly className="w-8 text-center text-sm text-gray-700 outline-none" />
                                          <button onClick={() => updateQuantity(item.id, 1)} className="px-2 py-1 hover:bg-gray-50 text-gray-500"><Plus size={12} /></button>
                                      </div>
                                  </td>
                                  <td className="py-4 text-right text-sm font-bold text-gray-700">
                                      {(item.price * item.quantity).toLocaleString('vi-VN')} ₫
                                  </td>
                                  <td className="py-4 text-right">
                                      <button onClick={() => removeItem(item.id)} className="text-gray-300 hover:text-red-400 transition">
                                          <X size={18} />
                                      </button>
                                  </td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </div>
              
              <div className="flex justify-between items-center mt-6">
                  <Link to="/shop" className="flex items-center gap-2 text-gray-500 hover:text-pink-500 transition text-sm font-bold uppercase">
                      <ArrowLeft size={16} /> Tiếp tục xem sản phẩm
                  </Link>
                  <button className="bg-gray-100 text-gray-600 font-bold px-6 py-2 rounded uppercase text-xs hover:bg-gray-200 transition">
                      Cập nhật giỏ hàng
                  </button>
              </div>
          </div>

          {/* Cart Totals Sidebar */}
          <div className="w-full lg:w-1/3">
              <div className="border-2 border-pink-200 p-6 bg-white/50 rounded-sm">
                  <h3 className="font-bold text-gray-600 uppercase mb-4 pb-2 border-b border-gray-200">Cộng giỏ hàng</h3>
                  <div className="flex justify-between py-3 border-b border-gray-100 text-sm">
                      <span className="font-bold text-gray-600">Tạm tính</span>
                      <span className="text-gray-500">{subtotal.toLocaleString('vi-VN')} ₫</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100 text-sm">
                      <span className="font-bold text-gray-600">Giao hàng</span>
                      <div className="text-right">
                          <span className="text-gray-500 block">Đồng giá: 30.000 ₫</span>
                          <span className="text-xs text-gray-400">Vận chuyển đến <strong className="text-gray-600">TP.HCM</strong>.</span>
                          <div className="mt-1 text-pink-500 text-xs cursor-pointer font-bold">Đổi địa chỉ</div>
                      </div>
                  </div>
                  <div className="flex justify-between py-4 text-lg font-bold text-gray-800">
                      <span>Tổng</span>
                      <span>{(subtotal + 30000).toLocaleString('vi-VN')} ₫</span>
                  </div>
                  <button 
                    onClick={() => navigate('/checkout')}
                    className="w-full bg-pink-400 text-white font-bold py-3 uppercase text-sm rounded hover:bg-pink-500 transition shadow-md mt-4 tracking-wider"
                  >
                      Tiến hành thanh toán
                  </button>
              </div>
              
              <div className="mt-6 border-t border-gray-100 pt-4">
                  <h4 className="font-bold text-gray-600 text-sm mb-2 flex items-center gap-2">
                      🎁 Phiếu ưu đãi
                  </h4>
                  <div className="flex gap-2">
                      <input type="text" placeholder="Mã ưu đãi" className="flex-1 border border-gray-200 px-3 py-2 rounded focus:outline-none focus:border-pink-300 text-sm" />
                      <button className="bg-gray-600 text-white px-4 py-2 rounded text-sm font-bold uppercase hover:bg-gray-700 transition">Áp dụng</button>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Cart;