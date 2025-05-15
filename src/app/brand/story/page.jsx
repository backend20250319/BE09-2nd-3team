"use client";

import useScrollActive from '@/app/brand/hooks/useScrollActive';
import { useEffect, useRef, useState } from 'react';

export default function Story() {

  const [ref1, isActive1] = useScrollActive();
  const [ref2, isActive2] = useScrollActive();

  return (
    <div className="content">
      <div className="brandArea">
        <div ref={ref1} className={`brandTitle1 motion ${isActive1 ? 'active' : ''}`}>
          <img src="/image/brand/brand_img_01.png" alt="Slogan" />
        </div>
        <div ref={ref2} className={`brandimg motion ${isActive2 ? 'active': ''}`}>
          <img src="/image/brand/brand_img_02.png" alt="Happiness Tastes Sweet 달콤함을 넘어 행복에 닿습니다. 한국적인 맛과 멋을 재해석한 맛있는 메뉴와 소담한 공간으로 다채로운 행복을 전합니다." />
        </div>
        <div class="brandTitle2 motion">
          <img src="/new/images/pc/brand_img_03.png" alt="Brand Concept" />
        </div>
      </div>
    </div>
  );
}