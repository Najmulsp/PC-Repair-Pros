import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PC Repair Pros",
  description: "Computer Repair Services Workshop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={inter.className}>
        <div className="bg-white max-w-7xl mx-auto">
        <Navbar></Navbar>
          {children}
        <Footer></Footer>
        </div>
        </body>
    </html>
  );
}
