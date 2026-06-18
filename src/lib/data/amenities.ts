import type { Amenity } from "@/types";

export const amenities: Amenity[] = [
  { id: "wifi", name: "Wifi", nameVi: "Wifi tốc độ cao", icon: "wifi", available: true },
  { id: "ac", name: "Air conditioning", nameVi: "Điều hòa nhiệt độ", icon: "ac_unit", available: true },
  { id: "kitchen", name: "Kitchen", nameVi: "Bếp đầy đủ tiện nghi", icon: "kitchen", available: true },
  { id: "washer", name: "Washer", nameVi: "Máy giặt trong nhà", icon: "local_laundry_service", available: true },
  { id: "tv", name: "TV", nameVi: "TV màn hình phẳng", icon: "tv", available: true },
  { id: "parking", name: "Free parking", nameVi: "Đỗ xe miễn phí", icon: "local_parking", available: true },
  { id: "pool", name: "Pool", nameVi: "Hồ bơi", icon: "pool", available: false },
  { id: "gym", name: "Gym", nameVi: "Phòng gym", icon: "fitness_center", available: true },
  { id: "balcony", name: "Balcony", nameVi: "Ban công", icon: "balcony", available: true },
  { id: "terrace", name: "Terrace", nameVi: "Sân thượng", icon: "deck", available: true },
  { id: "garden", name: "Garden", nameVi: "Vườn", icon: "grass", available: true },
  { id: "hot_tub", name: "Hot tub", nameVi: "Bồn ngâm nước nóng", icon: "hot_tub", available: true },
  { id: "workspace", name: "Dedicated workspace", nameVi: "Không gian làm việc riêng", icon: "desk", available: true },
  { id: "coffee", name: "Coffee machine", nameVi: "Máy pha cà phê", icon: "coffee", available: true },
  { id: "dishwasher", name: "Dishwasher", nameVi: "Máy rửa bát", icon: "dishwasher", available: true },
  { id: "iron", name: "Iron", nameVi: "Bàn ủi", icon: "iron", available: true },
  { id: "hair_dryer", name: "Hair dryer", nameVi: "Máy sấy tóc", icon: "dry_cleaning", available: true },
  { id: "safe", name: "Safe", nameVi: "Két sắt", icon: "lock", available: true },
  { id: "doorman", name: "Doorman", nameVi: "Bảo vệ", icon: "shield", available: true },
  { id: "elevator", name: "Elevator", nameVi: "Thang máy", icon: "elevator", available: true },
  { id: "breakfast", name: "Breakfast included", nameVi: "Bữa sáng miễn phí", icon: "breakfast_dining", available: true },
  { id: "airport_transfer", name: "Airport transfer", nameVi: "Đưa đón sân bay", icon: "airport_shuttle", available: true },
  { id: "concierge", name: "Concierge", nameVi: "Lễ tân", icon: "support_agent", available: true },
  { id: "chef_service", name: "Chef service", nameVi: "Dịch vụ đầu bếp", icon: "restaurant", available: true },
  { id: "smart_home", name: "Smart home", nameVi: "Nhà thông minh", icon: "home", available: true },
];

export function getAmenities(ids: string[]): Amenity[] {
  return amenities.filter((a) => ids.includes(a.id));
}
