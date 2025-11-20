import { Product, Category, BlogPost, Testimonial } from './types';

export const categories: Category[] = [
  { id: 'len-mem', name: 'Len Mềm', count: 10, color: 'bg-pink-200' },
  { id: 'dat-mau', name: 'Đất Màu', count: 6, color: 'bg-blue-100' },
  { id: 'hat-cuom', name: 'Hạt Cườm', count: 5, color: 'bg-pink-200' },
  { id: 'made4u', name: 'Made4U', count: 5, color: 'bg-orange-100' },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Vòng Tay Misty Forest",
    category: "Vòng Tay Handmade",
    price: 34000,
    originalPrice: 39000,
    rating: 5,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=500", // Green forest vibe
    discount: 13
  },
  {
    id: 2,
    name: "Bồ Hóng Ngồi Xích Đu",
    category: "Phụ Kiện",
    price: 49000,
    originalPrice: 42000, // Price logic from screenshot seems flipped or range, using single price
    rating: 5,
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=500", // Cute plush vibe
    discount: 15
  },
  {
    id: 3,
    name: "Dây Đeo Điện Thoại Hình Nhân Vật Thiết Kế Theo Yêu Cầu",
    category: "Dây Đeo",
    price: 53000,
    originalPrice: 62000,
    rating: 5,
    image: "https://images.unsplash.com/photo-1626202238009-b4c257774645?auto=format&fit=crop&q=80&w=500",
    discount: 15
  },
  {
    id: 4,
    name: "Bó Hoa Mini Màu Pastel Xinh Xắn",
    category: "Len Mềm",
    price: 59000,
    originalPrice: 69000,
    rating: 5,
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=500",
    discount: 15
  },
  {
    id: 5,
    name: "Móc Khóa Mèo May Mắn",
    category: "Đất Màu",
    price: 35000,
    rating: 4,
    image: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 6,
    name: "Vòng Tay Hạt Cườm Cầu Vồng",
    category: "Hạt Cườm",
    price: 25000,
    rating: 5,
    image: "https://images.unsplash.com/photo-1602752250015-6cbde136e5e1?auto=format&fit=crop&q=80&w=500",
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Flower Core – Khi những sợi len hóa thành cánh hoa nhỏ xinh 🌿",
    excerpt: "Khám phá bộ sưu tập hoa len mới nhất.",
    category: "Flower Core",
    image: "https://images.unsplash.com/photo-1586196767996-0a8d7d27e48e?auto=format&fit=crop&q=80&w=500",
    date: { day: 13, month: "Th10" },
    icon: "🌸"
  },
  {
    id: 2,
    title: "Vòng Tay Handmade – Khi cảm xúc được đan bằng những sợi chỉ nhỏ 🧵",
    excerpt: "Câu chuyện đằng sau mỗi chiếc vòng tay.",
    category: "BST Vòng Tay",
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&q=80&w=500",
    date: { day: 13, month: "Th10" },
    icon: "🧵"
  },
  {
    id: 3,
    title: "Choo choo~ Chuyến tàu nhà Ghibli đã sẵn sàng khởi hành!",
    excerpt: "Bộ sưu tập lấy cảm hứng từ Ghibli.",
    category: "BST Bồ Hóng Ghibli",
    image: "https://images.unsplash.com/photo-1536196154498-a695a1370dc6?auto=format&fit=crop&q=80&w=500",
    date: { day: 13, month: "Th10" },
    icon: "🚂"
  },
  {
    id: 4,
    title: "Đất Màu – Khi phụ kiện không chỉ là trang sức, mà là câu chuyện của riêng bạn",
    excerpt: "Sáng tạo vô hạn với đất sét.",
    category: "Đất Màu",
    image: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&q=80&w=500",
    date: { day: 13, month: "Th10" },
    icon: "🌿"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Khả Hân",
    content: "Bó hoa len mini quá dễ thương, cầm trên tay mới thấy tỉ mỉ và tinh tế. Hàng thủ công nhưng hoàn thiện rất đẹp. Giao hàng nhanh, shop tư vấn nhiệt tình. Nhất định sẽ ủng hộ thêm nè 🥰",
    rating: 5
  },
  {
    id: 2,
    name: "Thanh Vy",
    content: "Mình đặt một chiếc móc khóa đất sét ở Catput để tặng bạn thân, nhận hàng mà mê luôn! Món quà nhỏ nhưng được gói rất cẩn thận, chi tiết làm thủ công tinh tế, nhìn là thấy tâm huyết.",
    rating: 5
  },
  {
    id: 3,
    name: "Gia Hân",
    content: "Shop làm đồ dễ thương cực, đặc biệt là mấy món vòng tay len và phụ kiện hạt cườm. Mình mua để tặng sinh nhật bạn, ai cũng khen xinh. Giao hàng nhanh, có thiệp viết tay nhỏ xíu đáng yêu.",
    rating: 5
  },
  {
    id: 4,
    name: "Minh Khoa",
    content: "Tình cờ biết Catput qua mạng xã hội, giờ thành khách quen luôn. Mấy món handmade ở đây không chỉ đẹp mà còn có ý nghĩa, như chứa đựng cảm xúc của người làm. Mình rất thích vibe nhẹ nhàng.",
    rating: 5
  }
];