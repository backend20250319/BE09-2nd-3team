'use client';

import { useState } from 'react';
import SulbingTab from './subTab/sulBing';
import SideTab from './subTab/side';
import DrinkTab from './subTab/drink';

export default function Menu() {
  const [activeTab, setActiveTab] = useState('sulbingtab');

  return (
    <div className='contentArea'>
      <div className="subTab">
      <div className="inner">
        <div className="tabLink">
          <button
            onClick={() => setActiveTab('sulbingtab')}
            className={activeTab === 'sulbingtab' ? 'active' : ''}
          >
            설빙
          </button>
          <span className="divider">|</span>
          <button
            onClick={() => setActiveTab('sidetab')}
            className={activeTab === 'sidetab' ? 'active' : ''}
          >
            사이드
          </button>
          <span className="divider">|</span>
          <button
            onClick={() => setActiveTab('drinktab')}
            className={activeTab === 'drinktab' ? 'active' : ''}
          >
            음료
          </button>
        </div>

        <div>
          {activeTab === 'sulbingtab' && <SulbingTab />}
          {activeTab === 'sidetab' && <SideTab />}
          {activeTab === 'drinktab' && <DrinkTab />}
          <div className='bottomTxt'>* 매장 별 메뉴는 상이할 수 있습니다.</div>
        </div>
        
      </div>
    </div>

  </div>
    
  );
}
