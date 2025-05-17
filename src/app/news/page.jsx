"use client";
import { useState } from "react";
import Post1 from "./News/Post/page";
import FAQ1 from "./News/Faq/page";
import Support1 from "./News/CustomerService/page";
import History1 from "./News/Inquiry/page";

const navItemStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  color: "#4b1e1e",
  cursor: "pointer",
  padding: "10px 15px",
  textDecoration: "none",
  borderRight: "1px solid ",
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("Post");

  return (
    <div style={{ padding: "30px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <a onClick={() => setActiveTab("Post")}>
          <span style={navItemStyle}>공지사항</span>
        </a>
        <a onClick={() => setActiveTab("FAQ")}>
          <span style={navItemStyle}>FAQ</span>
        </a>
        <a onClick={() => setActiveTab("support")}>
          <span style={navItemStyle}>온라인 고객센터</span>
        </a>
        <a onClick={() => setActiveTab("history")}>
          <span style={navItemStyle}>온라인 상담 내역</span>
        </a>
      </div>

      {/* 콘텐츠 영역 */}
      <div className="NewsContents">
        {activeTab === "Post" && <Post1 />}
        {activeTab === "FAQ" && <FAQ1 />}
        {activeTab === "support" && <Support1 />}
        {activeTab === "history" && <History1 />}
      </div>
    </div>
  );
}
