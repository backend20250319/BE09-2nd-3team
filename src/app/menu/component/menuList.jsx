// components/MenuList.jsx
import menuData from '@/data/menu.json';
import Link from 'next/link';

export default function MenuList({ category }) {
  // subcategory을 기준으로 메뉴 그룹화
  const groupedBySubcategory = menuData.reduce((acc, menu) => {
    if (menu.category === category) {
      if (!acc[menu.subcategory]) {
        acc[menu.subcategory] = [];
      }
      acc[menu.subcategory].push(menu);
    }
    return acc;
  }, {});

  return (
    <>
      {Object.entries(groupedBySubcategory).map(([title, items]) => (
        <div className="menuListArea" key={title}>
          <div className="menuTitle">{title}</div>
          <ul className="menuList">
            {items.map((item) => (
              <li key={item.name}>
                <Link href={`/menu/menu_view?menu=${item.id}`} className="item" style={{textDecoration:"none"}}>
                  <img
                    src={encodeURI(item.image.endsWith('.png') ? item.image : item.image + '.png')}
                    alt={item.name}
                  />
                  <p>{item.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}