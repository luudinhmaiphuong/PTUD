import React, { useState } from 'react';
import { products } from '../data';
import { MessageCircle } from 'lucide-react';

const Checkout: React.FC = () => {
  const cartItems = products.slice(1, 2); // Mock item for checkout demonstration
  const subtotal = 84000;
  const shipping = 32400;
  const total = 116400;
  const vat = 8622;

  const [paymentMethod, setPaymentMethod] = useState('cod');

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Billing Details Form */}
        <div className="w-full lg:w-7/12">
            <h2 className="text-xl font-bold text-gray-600 uppercase mb-6 border-b pb-2">Thông tin thanh toán</h2>
            
            <form className="space-y-6">
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Họ và tên *</label>
                    <input type="text" defaultValue="fb" className="w-full border border-gray-200 px-4 py-3 rounded focus:outline-none focus:border-pink-300 transition bg-white" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Số điện thoại *</label>
                        <input type="text" defaultValue="0123456789" className="w-full border border-gray-200 px-4 py-3 rounded focus:outline-none focus:border-pink-300 transition bg-white" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Địa chỉ email *</label>
                        <input type="email" defaultValue="catputstore@gmail.com" className="w-full border border-gray-200 px-4 py-3 rounded focus:outline-none focus:border-pink-300 transition bg-white" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Tỉnh/Thành phố *</label>
                        <select className="w-full border border-gray-200 px-4 py-3 rounded focus:outline-none focus:border-pink-300 transition bg-white text-gray-600">
                            <option>Thành phố Hồ Chí Minh</option>
                            <option>Hà Nội</option>
                            <option>Đà Nẵng</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Phường/Xã *</label>
                        <select className="w-full border border-gray-200 px-4 py-3 rounded focus:outline-none focus:border-pink-300 transition bg-white text-gray-600">
                            <option>Phường An Khánh</option>
                            <option>Phường Bến Nghé</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Địa chỉ *</label>
                    <input type="text" defaultValue="dvfnjs" className="w-full border border-gray-200 px-4 py-3 rounded focus:outline-none focus:border-pink-300 transition bg-white" />
                </div>

                <div className="flex items-center gap-2">
                    <input type="checkbox" id="ship-elsewhere" className="rounded text-pink-500 focus:ring-pink-300" />
                    <label htmlFor="ship-elsewhere" className="text-sm text-gray-700 font-medium">Giao hàng đến một địa chỉ khác?</label>
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Ghi chú đơn hàng (tuỳ chọn)</label>
                    <textarea 
                        rows={4} 
                        placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."
                        className="w-full border border-gray-200 px-4 py-3 rounded focus:outline-none focus:border-pink-300 transition bg-white resize-none"
                    ></textarea>
                </div>
            </form>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-5/12">
            <div className="border-2 border-pink-300 p-8 bg-white relative">
                <h3 className="text-lg font-bold text-gray-600 uppercase mb-6">Đơn hàng của bạn</h3>
                
                <div className="flex justify-between text-sm font-bold text-gray-500 uppercase border-b border-gray-200 pb-2 mb-4">
                    <span>Sản phẩm</span>
                    <span>Tạm tính</span>
                </div>

                <div className="space-y-4 border-b border-gray-200 pb-4 mb-4">
                    {cartItems.map(item => (
                        <div key={item.id} className="flex justify-between text-sm text-gray-600">
                            <span>{item.name} <strong className="ml-1">× 2</strong></span>
                            <span className="font-bold">{item.price * 2 > 1000 ? (item.price * 2).toLocaleString('vi-VN') : item.price * 2} ₫</span>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between text-sm text-gray-600 border-b border-gray-200 pb-4 mb-4">
                    <span className="font-bold">Tạm tính</span>
                    <span className="font-bold">{subtotal.toLocaleString('vi-VN')} ₫</span>
                </div>

                 <div className="flex justify-between text-sm text-gray-600 border-b border-gray-200 pb-4 mb-4">
                    <span className="font-bold">Vận chuyển</span>
                    <div className="text-right">
                        <span className="block">Đồng giá 30k: <strong>{shipping.toLocaleString('vi-VN')} ₫</strong></span>
                    </div>
                </div>

                <div className="flex justify-between items-center text-lg font-bold text-gray-800 border-b border-gray-200 pb-6 mb-6">
                    <span>Tổng</span>
                    <div className="text-right">
                         <span>{total.toLocaleString('vi-VN')} ₫</span>
                         <div className="text-[10px] font-normal text-gray-500">(bao gồm <strong>{vat.toLocaleString('vi-VN')} ₫</strong> VNT)</div>
                    </div>
                </div>

                {/* Payment Methods */}
                <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                        <input 
                            type="radio" 
                            name="payment" 
                            id="cod" 
                            checked={paymentMethod === 'cod'} 
                            onChange={() => setPaymentMethod('cod')}
                            className="text-pink-500 focus:ring-pink-300" 
                        />
                        <label htmlFor="cod" className="font-bold text-gray-700 text-sm cursor-pointer">Thanh toán khi nhận hàng</label>
                    </div>
                    <div className="pl-7 text-sm text-gray-500 bg-gray-50 p-3 rounded hidden peer-checked:block">
                        Trả tiền mặt khi giao hàng.
                    </div>

                    <div className="flex items-center gap-3">
                        <input 
                             type="radio" 
                             name="payment" 
                             id="bank" 
                             checked={paymentMethod === 'bank'}
                             onChange={() => setPaymentMethod('bank')}
                             className="text-pink-500 focus:ring-pink-300" 
                        />
                        <label htmlFor="bank" className="font-bold text-gray-700 text-sm cursor-pointer flex items-center gap-2">
                            Chuyển khoản ngân hàng (Quét mã QR)
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/VietQR_logo.png/800px-VietQR_logo.png" alt="VietQR" className="h-4" />
                        </label>
                    </div>
                </div>

                <button className="w-full bg-pink-400 text-white font-bold uppercase py-4 rounded hover:bg-pink-500 transition shadow-md tracking-wider">
                    Đặt hàng
                </button>
                
                <div className="mt-6 text-[11px] text-gray-500 text-justify leading-relaxed">
                    Thông tin cá nhân của bạn sẽ được sử dụng để xử lý đơn hàng, tăng trải nghiệm sử dụng website, và cho các mục đích cụ thể khác đã được mô tả trong chính sách riêng tư của chúng tôi.
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;