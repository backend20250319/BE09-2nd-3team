import { Geist, Geist_Mono } from "next/font/google";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "설빙",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
