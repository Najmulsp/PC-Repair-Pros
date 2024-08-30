import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import AuthProvider from "./session/AuthProvider";
import { ThemeProvider } from "next-themes";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "PC Repair Pros",
    template: "%s | PC Repair Pros"
  },
  description: "Computer Repair Services Workshop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={inter.className}>
        <ThemeProvider defaultTheme="system" attribute="class">
      <AuthProvider>
        <div className="bg-white dark:bg-gray-950 max-w-7xl mx-auto">
        <Navbar></Navbar>
          {children}
        <Footer></Footer>
        </div>
      </AuthProvider>
      </ThemeProvider>
      </body>
    </html>
  );
}
