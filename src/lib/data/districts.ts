import type { District } from "@/types";
import hoanKiemHero from "@/assets/districts/hoan-kiem-hero.webp";
import westLakeHero from "@/assets/districts/west-lake-hero.webp";
import baDinhHero from "@/assets/districts/ba-dinh-hero.webp";

export const districts: District[] = [
  {
    slug: "hoan-kiem",
    name: "Hoan Kiem",
    nameVi: "Hoàn Kiếm",
    tagline: "The Heart of Hanoi's Heritage",
    taglineVi: "Trái tim di sản của thủ đô",
    description:
      "Stay in the heart of Hanoi's Old Quarter, where centuries of history blend with vibrant street life. Walking distance to Hoan Kiem Lake, iconic markets, and the city's best pho and egg coffee shops.",
    descriptionVi:
      "Trải nghiệm không gian sống ngay tại trái tim Phố Cổ Hà Nội, nơi hàng thế kỷ lịch sử hòa quyện với nhịp sống nhộn nhịp. Đi bộ đến Hồ Hoàn Kiếm, các chợ di sản và những quán phở, cà phê trứng nổi tiếng nhất thành phố.",
    heroImage: hoanKiemHero,
    propertyCount: 127,
    highlights: [
      {
        icon: "landmark",
        title: "Heritage Streets",
        titleVi: "Phố Cổ Di Sản",
        description: "Stroll through 36 streets, each historically named after its traditional trade.",
        descriptionVi: "Khám phá 36 phố phường, mỗi con phố mang tên theo nghề truyền thống.",
        bgColor: "bg-primary-container",
        textColor: "text-primary",
      },
      {
        icon: "restaurant",
        title: "Culinary Paradise",
        titleVi: "Thiên Đường Ẩm Thực",
        description: "World-famous pho, bun cha, and egg coffee are steps away from your door.",
        descriptionVi: "Phở, bún chả, cà phê trứng nổi tiếng thế giới ngay cạnh cửa nhà bạn.",
        bgColor: "bg-secondary",
        textColor: "text-white",
      },
      {
        icon: "pedal_bike",
        title: "Walkable Streets",
        titleVi: "Phố Đi Bộ",
        description: "Narrow lanes made for exploration on foot or by cyclo.",
        descriptionVi: "Những con phố nhỏ được tạo ra để khám phá bằng đôi chân hoặc xích lô.",
        bgColor: "bg-tertiary-container",
        textColor: "text-white",
      },
    ],
  },
  {
    slug: "west-lake",
    name: "West Lake",
    nameVi: "Tây Hồ",
    tagline: "Tranquil Lakeside Living",
    taglineVi: "Không gian sống yên bình ven hồ",
    description:
      "Escape to Hanoi's most serene district, where West Lake's calm waters meet upscale villas, lakeside cafes, and international restaurants. Ideal for long-term stays and those seeking peace.",
    descriptionVi:
      "Trốn đến quận yên bình nhất Hà Nội, nơi mặt hồ Tây hòa quyện với các biệt thự cao cấp, quán cà phê ven hồ và nhà hàng quốc tế. Lý tưởng cho kỳ nghỉ dài và những ai tìm kiếm sự tĩnh lặng.",
    heroImage: westLakeHero,
    propertyCount: 84,
    highlights: [
      {
        icon: "water",
        title: "Lake Views",
        titleVi: "View Hồ Tuyệt Đẹp",
        description: "Wake up to sweeping views of West Lake's 500-hectare expanse.",
        descriptionVi: "Thức dậy với tầm nhìn ra mặt hồ rộng 500 hecta.",
        bgColor: "bg-primary-container",
        textColor: "text-primary",
      },
      {
        icon: "nightlife",
        title: "Lakeside Cafes",
        titleVi: "Cà Phê Ven Hồ",
        description: "Sunset drinks and international dining at the city's most sophisticated cafes.",
        descriptionVi: "Ly cà phê hoàng hôn và ẩm thực quốc tế tại những quán cà phê thanh lịch nhất.",
        bgColor: "bg-secondary",
        textColor: "text-white",
      },
      {
        icon: "spa",
        title: "Wellness & Spa",
        titleVi: "Spa & Wellness",
        description: "Premium spa centers and wellness retreats along the lake shore.",
        descriptionVi: "Trung tâm spa và chăm sóc sức khỏe cao cấp dọc bờ hồ.",
        bgColor: "bg-tertiary-container",
        textColor: "text-white",
      },
    ],
  },
  {
    slug: "ba-dinh",
    name: "Ba Dinh",
    nameVi: "Ba Đình",
    tagline: "Elegance & Cultural Grandeur",
    taglineVi: "Giao thoa văn hóa và tiện nghi",
    description:
      "Stay in the district of monuments, grand boulevards, and quiet luxury. Experience the refined tranquility of Hanoi's most prestigious neighborhood, home to the Presidential Palace and fine arts museums.",
    descriptionVi:
      "Lưu trú tại quận của những đài kỷ niệm, đại lộ hoành tráng và xa hoa yên tĩnh. Trải nghiệm sự tinh tế của khu phố danh giá nhất Hà Nội, nơi đặt Phủ Chủ tịch và các bảo tàng mỹ thuật.",
    heroImage: baDinhHero,
    propertyCount: 93,
    highlights: [
      {
        icon: "museum",
        title: "Cultural Proximity",
        titleVi: "Gần Di Tích Văn Hóa",
        description: "Walking distance to the Ho Chi Minh Mausoleum, One Pillar Pagoda, and Vietnam Fine Arts Museum.",
        descriptionVi: "Trong bán kính đi bộ đến Lăng Chủ tịch, Chùa Một Cột và Bảo tàng Mỹ thuật Việt Nam.",
        bgColor: "bg-secondary",
        textColor: "text-white",
      },
      {
        icon: "restaurant_menu",
        title: "Elite Dining",
        titleVi: "Ẩm Thực Cao Cấp",
        description: "Home to Hanoi's most refined Indochine restaurants and secluded high-tea garden cafes.",
        descriptionVi: "Nơi tọa lạc của các nhà hàng Đông Dương tinh tế nhất và quán trà cao cấp trong vườn.",
        bgColor: "bg-primary-container",
        textColor: "text-primary",
      },
      {
        icon: "park",
        title: "Grand Boulevards",
        titleVi: "Đại Lộ Hoành Tráng",
        description: "Wide, mahogany-shaded avenues with the nation's most significant cultural monuments.",
        descriptionVi: "Những đại lộ rợp bóng cây sồi với các di tích văn hóa trọng yếu của quốc gia.",
        bgColor: "bg-tertiary-container",
        textColor: "text-white",
      },
    ],
  },
];

export function getDistrict(slug: string): District | undefined {
  return districts.find((d) => d.slug === slug);
}
