import React from 'react';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
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
};

export default Cart;