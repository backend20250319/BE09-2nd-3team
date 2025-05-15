import { BannerSlide } from "./BannerSlide"

export default function Home() {
  const slides = require("../data/banners.json")
  return <BannerSlide slides={slides} />
}
