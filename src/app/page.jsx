import React from "react";
import Link from "next/link";

function App() {
  return (
    <div>
      <h4>푸터</h4>
      <li>
        <Link href="/footer">footer</Link>
      </li>
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
  )
}