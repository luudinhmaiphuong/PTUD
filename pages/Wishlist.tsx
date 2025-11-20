import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { products } from '../data';

const Wishlist: React.FC = () => {
  // Initialize with some sample products to demonstrate the UI
  const [wishlistItems, setWishlistItems] = useState(products.slice(0, 3));

  const removeFromWishlist = (id: number) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-12 min-h-[50vh]">
       <h1 className="text-2xl font-bold text-gray-700 mb-8 font-sans">My wishlist</h1>

       <div className="overflow-x-auto">
         <table className="w-full border-collapse min-w-[600px]">
            <thead>
                <tr className="border-b border-t border-gray-100">
                    <th className="py-3 text-left text-gray-400 text-[11px] uppercase tracking-wider font-bold w-1/2 pl-4">Product Name</th>
                    <th className="py-3 text-center text-gray-400 text-[11px] uppercase tracking-wider font-bold">Unit Price</th>
                    <th className="py-3 text-center text-gray-400 text-[11px] uppercase tracking-wider font-bold">Stock Status</th>
                    <th className="py-3 text-center text-gray-400 text-[11px] uppercase tracking-wider font-bold"></th> 
                </tr>
            </thead>
            <tbody>
                {wishlistItems.length === 0 ? (
                    <tr>
                        <td colSpan={4} className="py-16 text-center text-gray-500 text-xl font-light">
                            No products added to the wishlist
                        </td>
                    </tr>
                ) : (
                    wishlistItems.map(item => (
                        <tr key={item.id} className="border-b border-gray-50 hover:bg-pink-50/10 transition-colors">
                            <td className="py-4 pl-4">
                                <div className="flex items-center gap-6">
                                    <button 
                                        onClick={() => removeFromWishlist(item.id)}
                                        className="text-gray-300 hover:text-red-400 transition-colors"
                                        title="Remove"
                                    >
                                        <X size={16} />
                                    </button>
                                    <div className="w-20 h-20 flex-shrink-0 border border-gray-100 rounded-md overflow-hidden">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <Link to={`/product/${item.id}`} className="font-bold text-gray-600 hover:text-pink-500 transition-colors text-sm">
                                        {item.name}
                                    </Link>
                                </div>
                            </td>
                            <td className="py-4 text-center">
                                <div className="flex flex-col items-center justify-center">
                                     {item.originalPrice && (
                                        <span className="text-[11px] text-gray-400 line-through mb-1">
                                            {item.originalPrice.toLocaleString('vi-VN')} ₫
                                        </span>
                                     )}
                                     <span className="font-bold text-gray-700 text-sm">
                                         {item.price.toLocaleString('vi-VN')} ₫
                                     </span>
                                </div>
                            </td>
                            <td className="py-4 text-center">
                                <span className="text-gray-700 font-medium text-sm">In Stock</span>
                            </td>
                            <td className="py-4 text-center pr-4">
                                <button className="bg-pink-300 text-white px-5 py-2 rounded text-[11px] font-bold uppercase tracking-wide hover:bg-pink-400 transition-all shadow-sm whitespace-nowrap">
                                    Add to Cart
                                </button>
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
         </table>
       </div>
       
       {/* Share / Social section often found on Wishlist pages */}
       <div className="mt-12 flex justify-center gap-4 text-gray-400 text-sm">
           <span>Share on:</span>
           <a href="#" className="hover:text-blue-600">Facebook</a>
           <a href="#" className="hover:text-blue-400">Twitter</a>
           <a href="#" className="hover:text-red-500">Pinterest</a>
           <a href="#" className="hover:text-green-600">Email</a>
       </div>
    </div>
  );
};

export default Wishlist;