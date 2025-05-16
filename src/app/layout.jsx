import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import "./globals.css";
import '@/styles/menuPage.css';

export const metadata = {
  title: "설빙",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/pxi1xil.css" />
      </head>
      <body className="wrap">
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
