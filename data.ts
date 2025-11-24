import { Product, Category, BlogPost, Testimonial } from "./types";

export const categories: Category[] = [
  { id: "len-mem", name: "Len Mềm", count: 10, color: "bg-pink-200" },
  { id: "dat-mau", name: "Đất Màu", count: 6, color: "bg-blue-100" },
  { id: "hat-cuom", name: "Hạt Cườm", count: 5, color: "bg-pink-200" },
  { id: "made4u", name: "Made4U", count: 5, color: "bg-orange-100" },
];

export const products: Product[] = [
  {
    id: 4,
    name: "Bồ Hóng Đội Thúng Đáng Yêu",
    category: "Len Mềm",
    price: 55000,
    originalPrice: 69000, // Price logic from screenshot seems flipped or range, using single price
    rating: 5,
    image: "/assets/bohongdoithung.png",
    discount: 15,
  },
  {
    id: 5,
    name: "Dây Đeo Điện Thoại Hình Nhân Vật Thiết Kế Theo Yêu Cầu",
    category: "Made4U",
    price: 52000,
    originalPrice: 65000,
    rating: 5,
    image: "/assets/daydeo.png",
    discount: 15,
  },
  {
    id: 6,
    name: "Bồ Hóng Cài Hoa Xinh Xắn",
    category: "Len Mềm",
    price: 42000,
    originalPrice: 49000,
    rating: 5,
    image: "/assets/bohongcaihoa.png",
    discount: 15,
  },
  {
    id: 1,
    name: "Vòng Tay Misty Forest",
    category: "Hạt Cườm",
    price: 34000,
    originalPrice: 39000,
    rating: 5,
    image: "/assets/mistyforest.png",
    discount: 15,
  },
  {
    id: 2,
    name: "Vòng Tay Sakura Bloom",
    category: "Hạt Cườm",
    price: 34000,
    originalPrice: 39000, // Price logic from screenshot seems flipped or range, using single price
    rating: 5,
    image: "/assets/sakurabloom.png",
    discount: 15,
  },
  {
    id: 3,
    name: "Vòng Tay Deep Blue",
    category: "Hạt Cườm",
    price: 33000,
    originalPrice: 38000, // Price logic from screenshot seems flipped or range, using single price
    rating: 5,
    image: "/assets/deepblue.png",
    discount: 15,
  },
  {
    id: 7,
    name: "BST Pin Cài Hoạt Hình Ghibli",
    category: "Đất Màu",
    price: 89000,
    rating: 5,
    image: "/assets/pinghibli.png",
  },
  {
    id: 8,
    name: "Vòng Tay Blue Xinh Xắn",
    category: "Hạt Cườm",
    price: 39000,
    rating: 5,
    image: "/assets/vongtay.png",
  },
  {
    id: 9,
    name: "Móc Khóa Hoa Linh Lan",
    category: "Len Mềm",
    price: 23000,
    rating: 5,
    image: "/assets/linhlan.png",
  },
  {
    id: 10,
    name: "Vòng Cổ Blue Lấp Lánh",
    category: "Hạt Cườm",
    price: 69000,
    rating: 5,
    image: "/assets/vongco.png",
  },
  {
    id: 11,
    name: "BST Pin Cài Trái Cây ",
    category: "Đất Màu",
    price: 95000,
    originalPrice: 99000,
    rating: 5,
    image: "/assets/traicay.png",
    discount: 15,
  },
  {
    id: 12,
    name: "Túi Rút Bồ Hóng ",
    category: "Len Mềm",
    price: 65000,
    originalPrice: 79000,
    rating: 5,
    image: "/assets/tuirutbohong.png",
    discount: 15,
  },
  {
    id: 13,
    name: "Bộ đôi Nick & Judy in Zootopia  ",
    category: "Len Mềm",
    price: 199000,
    originalPrice: 219000,
    rating: 5,
    image: "/assets/nickjudy.jpg",
    discount: 15,
  },
  {
    id: 14,
    name: "Bồ Hóng Ngồi Xích Đu",
    category: "Len Mềm",
    price: 49000,
    originalPrice: 55000,
    rating: 5,
    image: "/assets/bohong.png",
    discount: 15,
  },
  {
    id: 15,
    name: "BST Pin Cài Chó Mèo Cute",
    category: "Đất Màu",
    price: 84000,
    originalPrice: 95000,
    rating: 5,
    image: "/assets/pinchomeo.png",
    discount: 15,
  },
  {
    id: 16,
    name: "Pin Cài Hình Nhân Vật Thiết Kế theo yêu cầu",
    category: "Made4U",
    price: 68000,
    originalPrice: 79000,
    rating: 5,
    image: "/assets/pin.png",
    discount: 15,
  },
  {
    id: 17,
    name: "Smiski - Hipper Gắn Điện Thoại ",
    category: "Đất Màu",
    price: 48000,
    originalPrice: 55000,
    rating: 5,
    image: "/assets/hipper.png",
    discount: 15,
  },
  {
    id: 18,
    name: "Móc Khóa Hoa Tulip",
    category: "Len Mềm",
    price: 25000,
    rating: 5,
    image: "/assets/tulip.png",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Flower Core – Khi những sợi len hóa thành cánh hoa nhỏ xinh 🌿",
    excerpt: "Khám phá bộ sưu tập hoa len mới nhất.",
    category: "Flower Core",
    image:
      "https://images.unsplash.com/photo-1586196767996-0a8d7d27e48e?auto=format&fit=crop&q=80&w=500",
    date: { day: 13, month: "Th10" },
    icon: "🌸",
  },
  {
    id: 2,
    title: "Vòng Tay Handmade – Khi cảm xúc được đan bằng những sợi chỉ nhỏ 🧵",
    excerpt: "Câu chuyện đằng sau mỗi chiếc vòng tay.",
    category: "BST Vòng Tay",
    image:
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&q=80&w=500",
    date: { day: 13, month: "Th10" },
    icon: "🧵",
  },
  {
    id: 3,
    title: "Choo choo~ Chuyến tàu nhà Ghibli đã sẵn sàng khởi hành!",
    excerpt: "Bộ sưu tập lấy cảm hứng từ Ghibli.",
    category: "BST Bồ Hóng Ghibli",
    image:
      "https://images.unsplash.com/photo-1536196154498-a695a1370dc6?auto=format&fit=crop&q=80&w=500",
    date: { day: 13, month: "Th10" },
    icon: "🚂",
  },
  {
    id: 4,
    title:
      "Đất Màu – Khi phụ kiện không chỉ là trang sức, mà là câu chuyện của riêng bạn",
    excerpt: "Sáng tạo vô hạn với đất sét.",
    category: "Đất Màu",
    image:
      "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&q=80&w=500",
    date: { day: 13, month: "Th10" },
    icon: "🌿",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Khả Hân",
    content:
      "Bó hoa len mini quá dễ thương, cầm trên tay mới thấy tỉ mỉ và tinh tế. Hàng thủ công nhưng hoàn thiện rất đẹp. Giao hàng nhanh, shop tư vấn nhiệt tình. Nhất định sẽ ủng hộ thêm nè 🥰",
    rating: 5,
  },
  {
    id: 2,
    name: "Thanh Vy",
    content:
      "Mình đặt một chiếc móc khóa đất sét ở Catput để tặng bạn thân, nhận hàng mà mê luôn! Món quà nhỏ nhưng được gói rất cẩn thận, chi tiết làm thủ công tinh tế, nhìn là thấy tâm huyết.",
    rating: 5,
  },
  {
    id: 3,
    name: "Gia Hân",
    content:
      "Shop làm đồ dễ thương cực, đặc biệt là mấy món vòng tay len và phụ kiện hạt cườm. Mình mua để tặng sinh nhật bạn, ai cũng khen xinh. Giao hàng nhanh, có thiệp viết tay nhỏ xíu đáng yêu.",
    rating: 5,
  },
  {
    id: 4,
    name: "Minh Khoa",
    content:
      "Tình cờ biết Catput qua mạng xã hội, giờ thành khách quen luôn. Mấy món handmade ở đây không chỉ đẹp mà còn có ý nghĩa, như chứa đựng cảm xúc của người làm. Mình rất thích vibe nhẹ nhàng.",
    rating: 5,
  },
];
