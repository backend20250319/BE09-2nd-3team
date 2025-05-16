"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/news/News/Inquiry">
            <button>온라인 상담 내역</button>
          </Link>
        </li>
      </ul>
      <br />
      <ul>
        <li>
          <Link href="/news/News/CustomerService">
            <button>고객 센터</button>
          </Link>
        </li>
      </ul>
      <br />
      <ul>
        <li>
          <Link href="/news/News/Faq">
            <button>FQA</button>
          </Link>
        </li>
      </ul>
      <br />
      <ul>
        <li>
          <Link href="/news/News/Post">
            <button>공지 사항</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
