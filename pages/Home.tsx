import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { products, blogPosts, testimonials, categories } from '../data';

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="bg-white overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative bg-pink-50 overflow-hidden min-h-[400px] md:min-h-[500px] flex items-center">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-pink-100 to-transparent opacity-60 z-0"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 py-12">
          
          {/* Hero Image Composition (Left) */}
          <div className="w-full md:w-1/2 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-video md:aspect-square">
                {/* We construct a collage feel using styled divs since we don't have the exact PNGs */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-white rounded-3xl shadow-2xl border-4 border-white overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1606103920295-9a091573f160?auto=format&fit=crop&q=80&w=800" alt="Ghibli Inspired" className="w-full h-full object-cover opacity-90" />
                </div>
                {/* Floating badges/stickers simulation */}
                <div className="absolute -top-4 -left-4 bg-black text-white p-4 rounded-full shadow-lg transform -rotate-12 border-4 border-pink-200">
                    <span className="text-2xl">👀</span>
                </div>
                <div className="absolute -bottom-6 right-8 bg-white p-2 rounded-xl shadow-lg transform rotate-6">
                    <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=100" className="w-16 h-16 rounded-lg object-cover" />
                </div>
            </div>
          </div>

          {/* Hero Text (Right) */}
          <div className="w-full md:w-1/2 text-center md:text-right space-y-6">
            <div className="inline-block transform rotate-3">
               <h2 className="text-5xl md:text-7xl font-black text-white drop-shadow-[0_4px_0_rgba(244,114,182,1)] stroke-text-pink mb-2" style={{WebkitTextStroke: '2px #F472B6'}}>BỒ HÓNG</h2>
               <h2 className="text-5xl md:text-7xl font-black text-white drop-shadow-[0_4px_0_rgba(244,114,182,1)]" style={{WebkitTextStroke: '2px #F472B6'}}>GHIBLI</h2>
            </div>
            
            <div className="space-y-2">
                <h3 className="text-xl font-serif italic text-gray-600 tracking-widest">SPIRITED AWAY</h3>
                <p className="text-gray-500 text-sm md:text-base max-w-md ml-auto">
                  Chuyến tàu Ghibli "Vùng đất linh hồn" đã đến trạm 
                  <br/> 
                  – nơi những em bồ hóng nhỏ xinh, đáng yêu của Catput đang chờ bạn ♥
                </p>
            </div>

            <div className="flex gap-4 justify-center md:justify-end pt-4">
              <button className="bg-white text-gray-800 font-bold py-3 px-8 rounded-full border-2 border-gray-200 hover:border-pink-400 hover:text-pink-500 transition-all shadow-sm text-sm uppercase tracking-wider">
                Mua ngay
              </button>
              <button className="bg-pink-300 text-white font-bold py-3 px-8 rounded-full hover:bg-pink-400 transition-all shadow-md text-sm uppercase tracking-wider">
                Xem thêm
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 -mt-8 md:-mt-16 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, idx) => (
            <Link to={`/shop`} key={cat.id} className={`${cat.color} rounded-2xl p-6 h-32 md:h-40 flex items-center justify-center relative overflow-hidden shadow-md group transition-transform hover:-translate-y-1`}>
              <div className="absolute inset-0 border-4 border-white opacity-50 rounded-2xl pointer-events-none"></div>
              <div className="text-center z-10">
                 <h3 className="text-2xl md:text-3xl font-black text-white drop-shadow-md uppercase tracking-wider" style={{WebkitTextStroke: '1px rgba(0,0,0,0.1)'}}>
                    {cat.name}
                 </h3>
              </div>
              {/* Decorative circle */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white opacity-20 rounded-full"></div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
           <h2 className="text-2xl font-bold text-gray-600 uppercase tracking-wide inline-block relative pb-2">
             Sản phẩm nổi bật
             <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-pink-300 rounded-full"></span>
           </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group flex flex-col">
               <div className="relative overflow-hidden rounded-xl mb-4 shadow-sm border border-gray-100 bg-white">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full aspect-square object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.discount && (
                    <span className="absolute top-3 left-3 bg-red-400 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase">
                      Giảm giá!
                    </span>
                  )}
                  {/* Mini Logo Overlay similar to screenshot */}
                  <div className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center opacity-80">
                      <span className="text-[10px]">🐱</span>
                  </div>
               </div>
               
               <div className="space-y-2 px-1">
                 <div className="text-xs text-gray-400 uppercase font-medium tracking-wide">{product.category}</div>
                 <h3 className="font-bold text-gray-700 text-sm leading-tight group-hover:text-pink-500 transition-colors line-clamp-2 min-h-[2.5em]">
                   <Link to={`/product/${product.id}`}>{product.name}</Link>
                 </h3>
                 
                 <div className="flex gap-0.5">
                   {[1, 2, 3, 4, 5].map((star) => (
                     <Star key={star} size={12} className="text-yellow-400 fill-current" />
                   ))}
                 </div>

                 <div className="flex items-baseline gap-2 pt-1">
                   {product.originalPrice && (
                     <span className="text-gray-400 line-through text-xs">{product.originalPrice.toLocaleString('vi-VN')} ₫</span>
                   )}
                   <span className="text-gray-800 font-bold text-sm">{product.price.toLocaleString('vi-VN')} ₫ <span className="text-[10px] font-normal text-gray-400">VAT</span></span>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog / News Section */}
      <section className="bg-pink-50 py-16">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-2xl font-bold text-gray-600 uppercase tracking-wide mb-2">Những điều nhỏ xinh tại Catput</h2>
                <div className="w-12 h-1 bg-gray-300 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="group cursor-pointer">
                        <div className="relative rounded-2xl overflow-hidden mb-4 shadow-sm aspect-[4/3]">
                             <img 
                                src={post.image} 
                                alt={post.title} 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                             />
                             {/* Date Badge */}
                             <div className="absolute top-4 left-4 bg-pink-300 text-white p-2 rounded-lg text-center shadow-md min-w-[50px]">
                                 <div className="text-xl font-bold leading-none">{post.date.day}</div>
                                 <div className="text-[10px] uppercase font-bold">{post.date.month}</div>
                             </div>
                             {/* Title Overlay Style (from Screenshot 2/3) */}
                             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="text-center px-4">
                            <div className="text-pink-400 mb-2 text-lg">{post.icon}</div>
                            <h3 className="font-bold text-gray-700 mb-2 text-sm md:text-base group-hover:text-pink-500 transition-colors">
                                {post.title}
                            </h3>
                            <div className="w-8 h-0.5 bg-gray-200 mx-auto mt-4"></div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <Link to="/blog" className="text-pink-400 text-sm font-bold uppercase hover:text-pink-600 transition-colors">
                    Tất cả bài viết...
                </Link>
            </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16">
         <div className="text-center mb-12">
             <h2 className="text-2xl font-bold text-gray-600 uppercase tracking-wide mb-2">Khách hàng nói gì về Catput</h2>
             <div className="w-24 h-1 bg-pink-200 mx-auto rounded-full"></div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {testimonials.map((item) => (
                 <div key={item.id} className="bg-white p-6 rounded-lg shadow-lg border border-gray-50 hover:-translate-y-1 transition-transform duration-300">
                     <div className="flex justify-center gap-1 mb-4 text-yellow-300">
                         {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                     </div>
                     <p className="text-gray-500 text-sm italic text-center mb-6 leading-relaxed line-clamp-6">
                         "{item.content}"
                     </p>
                     <div className="text-center">
                         <span className="font-bold text-gray-700 text-sm uppercase tracking-wider block">{item.name}</span>
                     </div>
                 </div>
             ))}
         </div>
      </section>

    </div>
  );
};

export default Home;