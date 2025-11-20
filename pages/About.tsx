import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">ĐIỀU NHỎ XINH</h2>
        <h1 className="text-4xl font-bold text-textMain relative inline-block">
          Về chúng tôi
          <div className="w-12 h-1 bg-gray-200 absolute -bottom-4 left-1/2 transform -translate-x-1/2"></div>
        </h1>
      </div>

      <div className="space-y-8 text-gray-600 leading-relaxed">
        <div>
          <h3 className="text-lg font-medium text-gray-700 mb-2 flex items-center gap-2">
            Cách mà Catput ra đời... <span className="text-blue-400">🗣️</span><span className="text-yellow-400">✨</span>
          </h3>
          {/* Adding some vertical spacing for visual balance */}
          <div className="h-24"></div> 
        </div>

        <p>
          Có những điều nhỏ bé nhưng lại mang trong mình sức mạnh gắn kết, chữa lành và lan tỏa yêu thương. 
          Đó cũng chính là lý do <strong className="text-gray-800">Catput</strong> ra đời – một góc nhỏ dành cho những người yêu thích sự tinh tế và ấm áp từ <strong className="text-gray-800">đồ handmade</strong>.
        </p>

        <div>
          <h3 className="text-xl font-bold text-gray-700 italic mb-4">Hành trình bắt đầu</h3>
          <p>
            Từ những ngày đầu chỉ là sở thích cá nhân, Catput dần trở thành nơi gửi gắm niềm đam mê sáng tạo. 
            Mỗi sợi len đan, mỗi hạt cườm xâu, mỗi mảnh đất sét được nặn thành hình đều mang trong mình một câu chuyện – 
            câu chuyện về sự kiên nhẫn, sự tỉ mỉ và tình yêu dành cho cái đẹp.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-700 italic mb-4">Sản phẩm của Catput</h3>
          <p>
            Chúng tôi tập trung vào các sản phẩm thủ công chất lượng cao, không chỉ đẹp mắt mà còn bền bỉ. 
            Mỗi sản phẩm đều được kiểm tra kỹ lưỡng trước khi đến tay khách hàng.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;