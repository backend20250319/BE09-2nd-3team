import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <header>
          <nav>
            <Link href='/brand/story'>Brand</Link>
          </nav>
        </header>
        <body>{children}</body>
        <footer></footer>
      </body>
    </html>
  );
}
