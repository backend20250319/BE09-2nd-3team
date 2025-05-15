"use client";

import React, { useState } from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const [scale, setScale] = useState(1);

  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      setScale((prev) => Math.min(prev + 0.1, 3));
    } else {
      setScale((prev) => Math.max(prev - 0.1, 1));
    }
  };

  return (
    <footer className={styles.footer} onWheel={handleWheel}>
      {/* PC 전용 이미지 및 링크 오버레이를 감싸는 div */}
      <div
        className={styles.linkOverlay}
        style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}
      >
        <img
          src="https://sulbing.com/new/images/pc/footer_250416.png"
          className={styles.pcOnly}
          alt="PC 푸터"
        />

        {/* PC 전용 링크 */}
        <a href="/news/onlinecenter.php" className={styles.link1} />
        <a href="/rule/privacy.php" className={styles.link2} />
        <a href="/rule/email_legal.php" className={styles.link3} />
        <a href="/rule/legal_notice.php" className={styles.link4} />
      </div>

      {/* 모바일 전용 이미지 */}
      <img
        src="https://sulbing.com/new/images/mobile/footer_250416.png"
        className={styles.mobileOnly}
        alt="모바일 푸터"
      />

      {/* 모바일 전용 링크 */}
      <div className={styles.mobileLinkOverlay}>
        <a href="/news/onlinecenter.php" className={styles.mobileLink1} />
        <a href="/rule/privacy.php" className={styles.mobileLink2} />
        <a href="/rule/email_legal.php" className={styles.mobileLink3} />
        <a href="/rule/legal_notice.php" className={styles.mobileLink4} />
      </div>
    </footer>
  );
}
