import React from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 flex justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border border-pink-100">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-8">Đăng Nhập</h2>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">Tên đăng nhập hoặc email *</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300 outline-none transition"
              placeholder="Nhập tên đăng nhập..."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">Mật khẩu *</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300 outline-none transition"
              placeholder="Nhập mật khẩu..."
            />
          </div>

          <div className="flex items-center justify-between text-sm">
             <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                <input type="checkbox" className="rounded text-pink-500 focus:ring-pink-400" />
                Ghi nhớ mật khẩu
             </label>
             <a href="#" className="text-pink-500 hover:underline">Quên mật khẩu?</a>
          </div>

          <button className="w-full bg-pink-400 text-white font-bold py-3 rounded-lg hover:bg-pink-500 transition-transform transform active:scale-95 uppercase tracking-wider">
            Đăng nhập
          </button>
        </form>

        <div className="mt-8 text-center text-gray-500 text-sm">
           Chưa có tài khoản? <Link to="/register" className="text-pink-500 font-bold hover:underline">Đăng ký ngay</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;