import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/custom_components/navbar/page";
import Footer from "@/custom_components/footer/page";
import ContextData from "./contextapi/contextData";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Crown Engineering Works",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ContextData>
          <Navbar />
          {children}
          <Footer />
        </ContextData>
      </body>
    </html>
  );
}
