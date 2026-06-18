import type { StaticImageData } from "next/image";

import bd00102 from "@/assets/properties/gallery/bd-001-02.jpg";
import bd00103 from "@/assets/properties/gallery/bd-001-03.jpg";
import bd00202 from "@/assets/properties/gallery/bd-002-02.jpg";
import bd00203 from "@/assets/properties/gallery/bd-002-03.jpg";
import bd00302 from "@/assets/properties/gallery/bd-003-02.jpg";
import bd00303 from "@/assets/properties/gallery/bd-003-03.jpg";
import bd00402 from "@/assets/properties/gallery/bd-004-02.jpg";
import bd00403 from "@/assets/properties/gallery/bd-004-03.jpg";
import bd00502 from "@/assets/properties/gallery/bd-005-02.jpg";
import bd00503 from "@/assets/properties/gallery/bd-005-03.jpg";
import bd00602 from "@/assets/properties/gallery/bd-006-02.jpg";
import bd00603 from "@/assets/properties/gallery/bd-006-03.jpg";
import hk00102 from "@/assets/properties/gallery/hk-001-02.jpg";
import hk00103 from "@/assets/properties/gallery/hk-001-03.jpg";
import hk00202 from "@/assets/properties/gallery/hk-002-02.jpg";
import hk00203 from "@/assets/properties/gallery/hk-002-03.jpg";
import hk00302 from "@/assets/properties/gallery/hk-003-02.jpg";
import hk00303 from "@/assets/properties/gallery/hk-003-03.jpg";
import hk00402 from "@/assets/properties/gallery/hk-004-02.jpg";
import hk00403 from "@/assets/properties/gallery/hk-004-03.jpg";
import hk00502 from "@/assets/properties/gallery/hk-005-02.jpg";
import hk00503 from "@/assets/properties/gallery/hk-005-03.jpg";
import hk00602 from "@/assets/properties/gallery/hk-006-02.jpg";
import hk00603 from "@/assets/properties/gallery/hk-006-03.jpg";
import wl00102 from "@/assets/properties/gallery/wl-001-02.jpg";
import wl00103 from "@/assets/properties/gallery/wl-001-03.jpg";
import wl00202 from "@/assets/properties/gallery/wl-002-02.jpg";
import wl00203 from "@/assets/properties/gallery/wl-002-03.jpg";
import wl00302 from "@/assets/properties/gallery/wl-003-02.jpg";
import wl00303 from "@/assets/properties/gallery/wl-003-03.jpg";
import wl00402 from "@/assets/properties/gallery/wl-004-02.jpg";
import wl00403 from "@/assets/properties/gallery/wl-004-03.jpg";
import wl00502 from "@/assets/properties/gallery/wl-005-02.jpg";
import wl00503 from "@/assets/properties/gallery/wl-005-03.jpg";
import wl00602 from "@/assets/properties/gallery/wl-006-02.jpg";
import wl00603 from "@/assets/properties/gallery/wl-006-03.jpg";

type GalleryPair = [StaticImageData, StaticImageData];

export const additionalPropertyImages: Record<string, GalleryPair> = {
  "hk-001": [hk00102, hk00103],
  "hk-002": [hk00202, hk00203],
  "hk-003": [hk00302, hk00303],
  "hk-004": [hk00402, hk00403],
  "hk-005": [hk00502, hk00503],
  "hk-006": [hk00602, hk00603],
  "wl-001": [wl00102, wl00103],
  "wl-002": [wl00202, wl00203],
  "wl-003": [wl00302, wl00303],
  "wl-004": [wl00402, wl00403],
  "wl-005": [wl00502, wl00503],
  "wl-006": [wl00602, wl00603],
  "bd-001": [bd00102, bd00103],
  "bd-002": [bd00202, bd00203],
  "bd-003": [bd00302, bd00303],
  "bd-004": [bd00402, bd00403],
  "bd-005": [bd00502, bd00503],
  "bd-006": [bd00602, bd00603],
};
