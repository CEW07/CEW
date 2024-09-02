import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/custom_components/navbar/page";
import Footer from "@/custom_components/footer/page";
import Enquiry from "@/custom_components/Enquiry/Enquiry";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Crown Engineering Works",
  description: "Pioneers in fluid Conveyance Solutions",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_FRONTEND_URL}`),

  openGraph: {
    title: "Crown Engineering Works",
    description: "Pioneers in Fluid Conveyance Solutions",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/assets/icons/fullLogo.png`,
        width: 800,
        height: 600,
        alt: "Crown Engineering Works Logo",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="robots" content="index, follow" />

      <body className={`relative ${montserrat.className}`}>
        <Navbar />
        <Enquiry />
        {children}
        <div className="fixed ml-6 px-2 py-2 shadow-xl bg-[#25d366] bottom-8 rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-none z-10">
          <Link
            href="https://wa.me/9820786752"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-4xl text-offwhite " />
          </Link>
        </div>
        <Footer />
        <section className=" bg-newgold max-sm:flex-col flex justify-between  items-center p-4">
          <p className=" m-0 max-sm:text-center  text-white text-[14px]">
            Copyright &#169; 2024 Crown Engineering. All rights reserved
          </p>
          <div className="flex items-center space-x-5 max-sm:mt-6">
            <div>
              <Link href="https://www.instagram.com/crownengineeringworks/?fbclid=IwZXh0bgNhZW0CMTEAAR2TVvcYnz2aO6LiBYFIRejOb1Zl6jKOJXmXnFd2BaLqW-DKlRv4EKsZKoY_aem_CIoKaLGue4NmQ5_QJhjxxQ">
                <img
                  src="/assets/icons/socialIcons/Instagram.svg"
                  className="h-12"
                />
              </Link>
            </div>
            <div>
              <Link href="https://www.facebook.com/crownengineeringworks">
                <img
                  src="/assets/icons/socialIcons/facebook.svg"
                  className="h-10"
                />
              </Link>
            </div>
            <div>
              <Link href="https://www.linkedin.com/company/crown-engineering-works/?viewAsMember=true">
                <img
                  src="/assets/icons/socialIcons/LinkedIn.svg"
                  className="h-10"
                />
              </Link>
            </div>
          </div>
          {/* <p className="text-nowrap m-0 text-offwhite font-semibold text-[10px] md:text-[16px] xl:text-lg pr-4">
          PIONEERS IN FLUID CONVEYANCE SOLUTIONS.
        </p> */}
        </section>
      </body>
    </html>
  );
}
