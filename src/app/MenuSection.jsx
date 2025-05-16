import Image from "next/image"
import Link from "next/link"
import styles from "./MenuSection.module.css"

// 샘플 메뉴 데이터 (설빙 메뉴)
const menuItems = [
  {
    id: 1,
    name: "자.망.고.설빙",
    image: "/product_small_asltgav.png",
  },
  {
    id: 2,
    name: "찐망루피낭만딸기설빙",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "찐망루피낭만초코설빙",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "생딸기설빙",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 5,
    name: "순수요거생딸기설빙",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function MenuSection() {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layout}>
          {/* 왼쪽 메뉴 카테고리 링크 */}
          <div className={styles.sidebar}>
            <img className={styles.title} src="/images/mobile/main_title_01.png"/>
            <div className={styles.linkContainer}>
              <Link href="/menu?type=사이드">
                <img src="images/mobile/btn_side.png"/>
              </Link>
              <Link href="/menu?type=음료">
                <img src="images/mobile/btn_drink.png"/>
              </Link>
            </div>
          </div>

          {/* 오른쪽 메뉴 아이템 */}
          <div className={styles.menuContainer}>
            <div className={styles.menuList}>
              {menuItems.map((item) => (
                <div key={item.id} className={styles.menuItem}>
                  <div className={styles.imageContainer}>
                    <div className={styles.imageWrapper}>
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                  </div>
                  <span className={styles.menuName}>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

