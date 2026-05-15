import { Geist, Geist_Mono, Inter, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import TelegramContent from "@/components/telegramContent";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: 'swap'
});

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: 'swap'
});

export const metadata = {
  title: "Lunar Wolf",
  description: "${Change when get it}",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${robotoSans.variable} ${interSans.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <TelegramContent />
      </body>
    </html>
  );
}
