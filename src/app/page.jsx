import { BannerSlide } from "./BannerSlide"
import MenuSection from "./MenuSection"

export default function Home() {
  const banners = require("../data/banners.json")
  return (
    <>
      <BannerSlide banners={banners} />
      <MenuSection />
    </>
  )
}
