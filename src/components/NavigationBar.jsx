import "@/styles/style.css"
import Link from "next/link"

export default function NavigationBar() {
  return (
    <div className="topnav">
      <Link href="/">
        <img src="/images/mobile/logo.png" alt="sulbing" />
      </Link>
      <div className="menu">
        <Link href="/brand">BRAND</Link>
        <Link href="/menu">MENU</Link>
        <Link href="/news">NEWS</Link>
        <Link href="/store">STORE</Link>
      </div>
    </div>
  )
}
