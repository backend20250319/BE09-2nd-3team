// components/MenuList.jsx
import menuData from '@/data/menu.json';


export default function MenuList({ category }) {
  const filteredData = menuData
    .map(section => ({
      ...section,
      items: section.items.filter(item => item.category === category)
    }))
    .filter(section => section.items.length > 0);

return (
  <>
    {filteredData.map((section, index) => (
      <div className="menuListArea" key={index}>
        <div className="menuTitle">{section.title}</div>
        <ul className="menuList">
          {section.items.map((item, i) => (
            <li key={i}>
              <a href={item.href || "#"} className="item" style={{textDecoration:"none"}}>
                <img
                  src={encodeURI(item.image.endsWith('.png') ? item.image : item.image + '.png')}
                  alt={item.name}
                />
                <p>{item.name}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </>
);

}