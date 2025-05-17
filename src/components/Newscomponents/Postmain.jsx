"use client";

import { useState } from "react";
import FQA from "@/components/Newscomponents/FQAprograme";
import CustomerServiceForm from "./CustomerServiceForm";
import Inquiryform from "./Inquiryform";

export default function Postmain() {
  const [activeTab, setActiveTab] = useState("notice");

  const renderContent = () => {
    switch (activeTab) {
      case "notice":
        return (
          <div>
            <h1>
              <label
                style={{ fontSize: "50px", border: "1px", color: "#42120e" }}
              >
                새소식 & 공지
              </label>
            </h1>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                gap: "40px",
                borderBottom: "1px solid",
                paddingBottom: "20px",
                fontSize: "24px",
                fontWeight: "bold",
                textcolor: "#42120e",
                cursor: "pointer",
                textDecoration: "none",
                borderRight: "1px solid #ddd",
              }}
            >
              <a
                href="https://sulbing.com/news/view.php?news=13"
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: "100px 50px",
                  backgroundColor: "blue",
                  textcolor: "white",
                  borderRadius: "8px",
                  textDecoration: "none",
                }}
              >
                차림설빙 팥 출시 공지 보기
              </a>
              <a
                href="https://sulbing.com/news/view.php?news=10"
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: "100px 50px",
                  backgroundColor: "orange",
                  textcolor: "#42120e",
                  borderRadius: "8px",
                  textDecoration: "none",
                }}
              >
                설빙의 NEW BI 공개 보기
              </a>
            </div>
          </div>
        );
      case "faq":
        return <FQA />;
      case "customer":
        return <CustomerServiceForm />;
      case "inquiry":
        return <Inquiryform />;
      default:
        return null;
    }
  };
  return (
    <div style={{ padding: "40px" }}>
      <div style={{ marginBottom: "20px", display: "flex", gap: "20px" }}></div>

      <div>{renderContent()}</div>
    </div>
  );
}
