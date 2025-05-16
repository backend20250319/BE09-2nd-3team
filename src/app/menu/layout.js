import './globals.css';
import '@/styles/menuPage.css';

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/pxi1xil.css" />
      </head>
      <body >
        {children}
      </body>
    </html>
  );
}
