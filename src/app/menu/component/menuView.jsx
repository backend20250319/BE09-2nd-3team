'use client';

import './menuView.css';
import menuList from '@/data/menu.json';
import { useEffect, useState } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

export default function MenuView({ menu }) {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const swiper = new Swiper('.menuSlide', {
      direction: 'vertical',
      slidesPerView: 4,
      slidesPerGroup: 4,
      mousewheel: { releaseOnEdges: true },
      on: {
        slideChange: function () {
          setIsBeginning(this.isBeginning);
          setIsEnd(this.isEnd);
        },
      },
    });

    const handleUp = () => swiper.slidePrev();
    const handleDown = () => swiper.slideNext();

    document.querySelector('.btnUp')?.addEventListener('click', handleUp);
    document.querySelector('.btnDown')?.addEventListener('click', handleDown);

    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);

    return () => {
      document.querySelector('.btnUp')?.removeEventListener('click', handleUp);
      document.querySelector('.btnDown')?.removeEventListener('click', handleDown);
    };
  }, []);

  const filteredMenus = menuList.filter((m) => m.category === '설빙');

  return (
    <div className="container menuView">
      <div className="contentArea">
        <div className="menuViewArea">
          <div className="menuSlideArea">
            <button className="btnUp" disabled={isBeginning}>
              <img src="/images/view_sldie_up.png" alt="이전" />
            </button>
            <div className="swiper menuSlide">
              <div className="swiper-wrapper">
                {filteredMenus.map((m) => (
                  <div className="swiper-slide" key={m.id}>
                    <button
                      className={m.id === menu.id ? 'on' : ''}
                      onClick={() => (location.href = `/menu/${m.id}`)}
                    >
                      <img src={`/images/special/${m.name}.png`} alt={m.name} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <button className="btnDown" disabled={isEnd}>
              <img src="/images/view_sldie_down.png" alt="다음" />
            </button>
          </div>

          <div className="menuSlideBig">
            <div className="imgArea" key={menu.id + '-img'}>
              <img src={menu.image} alt={menu.name} />
            </div>
            <div className="textArea" key={menu.id + '-text'}>
              <div className="productTitle">{menu.name}</div>
              <ul className="thumb">
                {menu.ingredients?.map((item, index) => (
                  <li key={menu.id + '-ingredient-' + index}>
                    <div className="img">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="txt">{item.name}</div>
                  </li>
                ))}
              </ul>
              <div className="subTitle">{menu.subTitle}</div>
              <div className="desc">
                {menu.description?.split('\n').map((line, index) => (
                  <p key={menu.id + '-desc-' + index}>{line}</p>
                ))}
              </div>
              <ul className="infomation">
                <li>
                  <div className="title">영양정보</div>
                  <div className="con">{menu.nutrition}</div>
                </li>
                <li>
                  <div className="title">알레르기 정보</div>
                  <div className="con">{menu.allergy}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
