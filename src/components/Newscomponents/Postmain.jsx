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
                cursor: "pointer",
                padding: "50px",
              }}
            >
              <a
                href="https://sulbing.com/news/view.php?news=13"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: "300px",
                  height: "300px",
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "8px",
                  textDecoration: "none",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ height: "60%", overflow: "hidden" }}>
                  <img
                    src="https://th.bing.com/th/id/OIP.CMLP0EnWXgRHIHpZjWXslAHaFj?rs=1&pid=ImgDetMain"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ padding: "20px", textAlign: "center" }}>
                  차림설빙 팥 출시 공지 보기
                </div>
              </a>

              <a
                href="https://sulbing.com/news/view.php?news=10"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: "300px",
                  height: "300px",
                  backgroundColor: "white",
                  color: "#42120e",
                  borderRadius: "8px",
                  textDecoration: "none",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ height: "60%", overflow: "hidden" }}>
                  <img
                    src="https://kin-phinf.pstatic.net/20220126_149/16431600112494HJX0_JPEG/jammin.jpeg?type=w750"
                    alt="BI 이미지"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ padding: "20px", textAlign: "center" }}>
                  설빙의 NEW BI 공개 보기
                </div>
              </a>
              <a
                href="404notfound"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: "300px",
                  height: "300px",
                  backgroundColor: "white",
                  color: "#42120e",
                  borderRadius: "8px",
                  textDecoration: "none",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ height: "60%", overflow: "hidden" }}>
                  <img
                    src="https://www.99yangshengtang.com/uploads/allimg/c150223/1-130G6145148.jpg"
                    alt="BI 이미지"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ padding: "20px", textAlign: "center" }}>
                  설빙의 신메뉴!! 아따 마 이 맛이야
                </div>
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
