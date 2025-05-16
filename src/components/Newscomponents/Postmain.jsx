"use client";

export default function Postmain() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>새소식 & 공지</h1>
      <div style={{ display: "flex", flexwarap: "wrap", gap: "20px" }}></div>
      <a
        href="https://sulbing.com/news/view.php?news=13"
        target="_blank"
        rel="n"
        style={{
          padding: "10px 20px",
          backgroundColor: "blue",
          border: "8px",
        }}
      >
        눌러 보든가
      </a>
      <a
        href="https://sulbing.com/news/view.php?news=10"
        target="_blank"
        rel="n"
        style={{
          padding: "10px 20px",
          backgroundColor: "yellow",
          border: "8px",
        }}
      >
        눌러 보든가
      </a>
    </div>
  );
}
