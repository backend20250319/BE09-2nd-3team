"use client";
import React from "react";
import "@/components/Newscomponents/Inquiry.css";

function InquiryForm() {
  return (
    <div className="form-wrapper">
      <h2>온라인 상담 내역</h2>
      <p>
        항상 설빙에 많은 관심을 가져주셔서 감사합니다.
        <br />
        상담 요청 주신 내용 답변 확인을 위해 아래 정보를 입력해 주시기 바랍니다.
      </p>
      <div className="box">
        <label htmlFor="name">성명</label>
        <input type="text" id="name" />
        <br />
        <label>연락처</label>
        <input type="text" id="phone1" maxLength="3" size="3" />
        <input type="text" id="phone2" maxLength="3" size="3" />
        <input type="text" id="phone3" maxLength="4" size="4" />
        <br />
        <label htmlFor="password">비밀번호</label>
        <input type="text" id="password" />
        <br />
        <input type="submit" value="확인" />
      </div>
    </div>
  );
}

export default InquiryForm;
