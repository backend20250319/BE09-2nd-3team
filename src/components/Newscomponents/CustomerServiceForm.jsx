"use client";

import React, { useState } from "react";
import "@/components/Newscomponents/CustomerServiceForm.css";

export default function CustomerServiceForm() {
  const [selectedStore, setSelectedStore] = useState("");
  const [showStoreModal, setShowStoreModal] = useState(false);
  const [region, setRegion] = useState("");

  const handleSearchStore = () => {
    setShowStoreModal(false);
  };

  return (
    <div className="form-wrapper">
      <div className="call">
        <label>온라인 고객센터</label>
        <div className="t">
          서비스 및 고객 불편 사항 등을 남겨주시면 <br />
          영업일 10일 이내로 답변드리도록 하겠습니다.
        </div>
      </div>

      <div className="input-group">
        <div className="input-with-label">
          <span className="inline-label required">고객명 |</span>
          <input type="text" required />
        </div>

        <div className="input-with-label phone-wrapper">
          <span className="inline-label required">연락처 |</span>
          <select defaultValue="010" className="phone-select underline">
            <option value="010">010</option>
            <option value="011">011</option>
          </select>
          <span className="phone-hyphen">-</span>
          <input type="text" maxLength={4} className="phone-input underline" />
          <span className="phone-hyphen">-</span>
          <input type="text" maxLength={4} className="phone-input underline" />
        </div>

        <div className="input-with-label">
          <span className="inline-label required">이메일 |</span>
          <input type="email" required />
        </div>

        <div className="input-with-label">
          <span className="inline-label">상담분류 |</span>
          <select defaultValue="매장서비스">
            <option value="매장서비스">매장서비스</option>
            <option value="온라인 쇼핑">온라인 쇼핑</option>
          </select>
        </div>

        <div className="input-with-label region-search">
          <span className="inline-label">이용 매장명 |</span>
          <input type="text" value={selectedStore} readOnly />
          <button
            type="button"
            className="region-button"
            onClick={() => setShowStoreModal(true)}
          >
            🔍
          </button>
        </div>

        {showStoreModal && (
          <div className="modal-overlay">
            <div className="store-modal">
              <button
                onClick={() => setShowStoreModal(false)}
                className="modal-close"
                aria-label="닫기"
              >
                ✕
              </button>
              <h3 className="modal-title">매장 검색</h3>
              <select
                className="select-box"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              >
                <option value="">지역선택</option>
                <option value="서울">서울특별시</option>
                <option value="경기">경기도</option>
                <option value="인천">인천광역시</option>
                <option value="제주">제주</option>
                <option value="충남">충청남도</option>
                <option value="충북">충청북도</option>
                <option value="부산">부산광역시</option>
                <option value="대구">대구광역시</option>
              </select>
              <input
                type="text"
                className="input-box"
                value={selectedStore}
                onChange={(e) => setSelectedStore(e.target.value)}
                placeholder="매장명 입력"
              />
              <button className="modal-search-btn" onClick={handleSearchStore}>
                검색
              </button>
              <hr />
            </div>
          </div>
        )}

        <div className="input-with-label">
          <span className="inline-label">이용방법 |</span>
          <select defaultValue="매장방문">
            <option value="매장방문">매장방문</option>
            <option value="배달">배달</option>
            <option value="포장">포장</option>
          </select>
        </div>

        <div className="input-with-label">
          <span className="inline-label">제품명 |</span>
          <input type="text" />
        </div>

        <div className="input-with-label">
          <span className="inline-label">문의유형 |</span>
          <select defaultValue="레시피">
            <option value="레시피">레시피</option>
            <option value="위생">위생</option>
            <option value="서비스">서비스</option>
            <option value="이물질">이물질</option>
            <option value="기프티콘">기프티콘</option>
            <option value="기타">기타</option>
          </select>
        </div>

        <div className="input-with-label textarea-wrapper">
          <span className="inline-label">문의내용 |</span>
          <textarea rows={4}></textarea>
        </div>

        <div className="input-with-label">
          <span className="inline-label">파일 업로드 |</span>
          <input type="file" />
        </div>

        <div className="input-with-label textarea-wrapper">
          <span className="inline-label">고객 요청 사항 |</span>
          <textarea rows={2}></textarea>
        </div>

        <div className="input-with-label">
          <span className="inline-label required">비밀번호 |</span>
          <input type="password" required />
        </div>

        <div className="captcha">
          <span className="captcha-code">775638</span>
          <input type="text" className="input-box" style={{ width: "100px" }} />
          <button className="region-button">🔊</button>
        </div>

        <div className="agree-check">
          <input type="checkbox" id="agree" />
          <label htmlFor="agree">
            개인정보처리방침을 읽었으며 이에 동의합니다.
          </label>
        </div>

        <div className="button-group">
          <button className="button-cancel" type="button">
            취소
          </button>
          <button className="button-submit" type="submit">
            등록
          </button>
        </div>
      </div>
    </div>
  );
}
