import "@/styles/style.css"
import Link from "next/link"

export default function NavigationBar() {
  return (
    <nav>
      <Link href="/">
        <img src="/images/mobile/logo.png" alt="sulbing" />
      </Link>
      <ul>
        <li>
          <Link href="/brand">BRAND</Link>
        </li>
        <li>
          <Link href="/menu">MENU</Link>
        </li>
        <li>
          <Link href="/news">NEWS</Link>
        </li>
        <li>
          <Link href="/store">STORE</Link>
        </li>
      </ul>
    </nav>
  )
}
