import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.linkOverlay}>
        <img
          src="/images/pc/footer_250416.png"
          className={styles.pcOnly}
          alt="PC 푸터"
        />

        <a
          href="https://sulbing.com/rule/privacy.php"
          className={styles.link1}
        />
        <Link href="/rule/privacy" className={styles.link2}></Link>
        <a href="/rule/email_legal.php" className={styles.link3} />
        <a href="/rule/legal_notice.php" className={styles.link4} />
      </div>

      <img
        src="/images/mobile/footer_250416.png"
        className={styles.mobileOnly}
        alt="모바일 푸터"
      />


      <div className={styles.mobileLinkOverlay}>
        <a href="/news/onlinecenter.php" className={styles.mobileLink1} />
        <a href="/rule/privacy.php" className={styles.mobileLink2} />
        <a href="/rule/email_legal.php" className={styles.mobileLink3} />
        <a href="/rule/legal_notice.php" className={styles.mobileLink4} />
      </div>
    </footer>
  );
}
