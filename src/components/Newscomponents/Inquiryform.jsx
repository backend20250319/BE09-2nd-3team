"use client";
import React, { useState } from "react";
import "@/components/Newscomponents/Inquiry.css";

function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="form-wrapper">
      {submitted && <div className="alert">확인되었습니다!</div>}

      <h2>
        <label style={{ fontSize: "45px" }}>온라인 상담내역</label>
      </h2>
      <br />
      <p>
        항상 설빙에 많은 관심을 가져주셔서 감사합니다.
        <br />
        상담 요청 주신 내용 답변 확인을 위해 <br />
        아래 정보를 입력해 주시기 바랍니다.
      </p>

      <form className="box" onSubmit={handleSubmit}>
        <div className="inputItems">
          <label htmlFor="name">성명 </label>
          <input type="text" id="name" maxLength="20" />
        </div>

        <div className="inputItems">
          <label htmlFor="phone1">연락처</label>
          <div className="phone-inputs-inline-with-button">
            <div className="phone-inputs-inline">
              <input type="text" id="phone1" maxLength="3" />
              <input type="text" id="phone2" maxLength="4" />
              <input type="text" id="phone3" maxLength="4" />
            </div>
            <input type="submit" value="확인" className="submit-inline" />
          </div>
        </div>
        <div className="inputItems">
          <label htmlFor="password">비밀번호 </label>
          <input type="text" id="password" maxLength="20" />
        </div>
      </form>
    </div>
  );
}

export default InquiryForm;
