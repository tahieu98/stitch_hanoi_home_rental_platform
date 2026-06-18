# AutumnHanoi

Website tìm kiếm và đặt căn hộ lưu trú tại Hà Nội, được xây dựng bằng Next.js 14, TypeScript và Tailwind CSS.

## Chạy trên máy

Yêu cầu Node.js 20 trở lên.

```bash
npm ci
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) trong trình duyệt.

## Kiểm tra bản production

```bash
npm run typecheck
npm run build
npm run start
```

## Triển khai

Workflow tại `.github/workflows/deploy-pages.yml` tự động build và triển khai website lên GitHub Pages mỗi khi có commit được push lên nhánh `main`.

Địa chỉ website:

<https://tahieu98.github.io/stitch_hanoi_home_rental_platform/>

