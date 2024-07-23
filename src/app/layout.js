import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/custom_components/navbar/page";
import Footer from "@/custom_components/footer/page";
import ContextData from "./contextapi/contextData";
import Enquiry from "@/custom_components/Enquiry/Enquiry";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Crown Engineering Works",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`relative ${montserrat.className}`}>
        <Navbar />
        <Enquiry />
        {children}
        <div className="fixed ml-6 px-2 py-2 shadow-xl bg-[#25d366] bottom-8 rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-none;">
          <Link
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-4xl text-offwhite" />
          </Link>
          {/* <p >ICON</p> */}
        </div>
        <Footer />
      </body>
    </html>
  );
}
