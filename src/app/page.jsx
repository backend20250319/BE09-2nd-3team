import { BannerSlide } from "./components/BannerSlide"
import MenuSection from "./components/MenuSection"
import SnsSection from "./components/SnsSection"

export default function Home() {
  const banners = require("../data/banners.json")
  return (
    <>
      <BannerSlide banners={banners} />
      <MenuSection menuIds={[1, 2, 3, 4, 5]} />
      <SnsSection />
    </>
  )
}
