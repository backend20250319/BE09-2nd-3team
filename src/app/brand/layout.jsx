"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import "./style.css"


export default function Layout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="ko">
      <body>
        <header className="headerContent">
          <nav className="subTab">
            <div className = "inner">
              <div className = "tabLink">
                <Link href='/brand/story/' className={`tab ${pathname === '/brand/story' ? 'on' : ''}`}>설빙 스토리</Link>
                <Link href='/brand/history' className={`tab ${pathname === '/brand/history' ? 'on' : ''}`}>연혁</Link>
                <Link href='/brand/bi' className={`tab ${pathname === '/brand/bi' ? 'on' : ''}`}>BI</Link>
              </div>
            </div>
          </nav>
        </header>
        <body>{children}</body>
        <footer></footer>
      </body>
    </html>
  );
}