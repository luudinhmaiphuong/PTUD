import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-pink-50 pt-16 pb-8 relative mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-textMain">
          
          {/* Column 1: Logo & Image */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4 relative">
               {/* Simulating the big sticker logo */}
               <div className="w-48 h-32 bg-white rounded-full border-4 border-blue-400 flex items-center justify-center shadow-lg transform -rotate-6">
                  <div className="text-center">
                      <span className="text-blue-500 text-4xl font-bold block">Cat</span>
                      <span className="text-pink-400 text-4xl font-bold block">Put</span>
                      <span className="text-gray-500 text-sm font-serif italic">-store-</span>
                  </div>
               </div>
            </div>
            <div className="flex gap-3 mt-4">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white cursor-pointer hover:bg-blue-600 transition">
                <Facebook size={20} />
              </div>
              <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center text-white cursor-pointer hover:bg-pink-600 transition">
                <Instagram size={20} />
              </div>
            </div>
          </div>

          {/* Column 2: Policies */}
          <div>
            <h3 className="font-bold text-gray-600 mb-4 uppercase tracking-wide">Chính sách</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-pink-500">Chính sách bảo mật</a></li>
              <li><a href="#" className="hover:text-pink-500">Chính sách vận chuyển</a></li>
              <li><a href="#" className="hover:text-pink-500">Chính sách đổi trả</a></li>
              <li><a href="#" className="hover:text-pink-500">Hướng dẫn mua hàng</a></li>
            </ul>
          </div>

          {/* Column 3: Menu */}
          <div>
            <h3 className="font-bold text-gray-600 mb-4 uppercase tracking-wide">Menu</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-pink-500">› Đất Màu</a></li>
              <li><a href="#" className="hover:text-pink-500">› Hạt Cườm</a></li>
              <li><a href="#" className="hover:text-pink-500">› Len Mềm</a></li>
              <li><a href="#" className="hover:text-pink-500">› Made4U</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-bold text-gray-600 mb-4 uppercase tracking-wide">Liên hệ</h3>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex gap-3">
                <MapPin size={18} className="flex-shrink-0 text-gray-400" />
                <span>279 Nguyễn Tri Phương, P. Diên Hồng, TP. HCM</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={18} className="flex-shrink-0 text-gray-400" />
                <span>catputstore@gmail.com</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={18} className="flex-shrink-0 text-gray-400" />
                <span>+84 916 367 385</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-bold text-xs uppercase mb-2">Follow Us</h4>
              <div className="flex gap-2 text-gray-400">
                 <Facebook size={16} />
                 <Instagram size={16} />
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 flex items-center gap-3 z-40 animate-bounce-slow">
         <div className="bg-white py-2 px-4 rounded-full shadow-md border border-gray-100 text-sm font-medium flex items-center gap-2 text-gray-700">
            Chat with us <span className="text-xl">👋</span>
         </div>
         <button className="bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors">
           <MessageCircle size={28} fill="white" />
         </button>
      </div>
    </footer>
  );
};

export default Footer;