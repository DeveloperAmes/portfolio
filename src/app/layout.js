import Header from "./components/Header";
import Footer from "./components/Footer";
import { Montserrat } from "next/font/google";

import "./globals.css";

const MontserratFont = Montserrat({
  variable: "--font-monserrat",
  subsets: ["latin"],
  weight: "500",
});

export const metadata = {
  title: "Amy Tuck Portfolio",
  description: "Amy Tuck's portfolio of software development projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${MontserratFont.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
