import React from "react";

function App() {
  return (
    <div>
      <BannerSlide />
    </div>
  );
}

export default App;

function BannerSlide() {
  return (
    <div>
      <img src="data/banner/main_banner_qcjgcbw.png" />
    </div>
  );
}

import { BannerSlide } from "./BannerSlide"

export default function Home() {
  const slides = require("../data/banners.json")
  return <BannerSlide slides={slides} />
}
