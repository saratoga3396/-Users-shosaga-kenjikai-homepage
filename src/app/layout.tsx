import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { OrganizationJsonLd } from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://kenjikai-officialhomepage.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#047857",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "社会福祉法人健慈会 | 特別養護老人ホーム結の里・グループホームぬくもり",
    template: "%s | 社会福祉法人健慈会",
  },
  description:
    "岩手県野田村の社会福祉法人健慈会が運営する特別養護老人ホーム結の里とグループホームぬくもり。地域密着型介護サービスで、利用者様の尊厳を守り、家庭的な雰囲気の中で安心して暮らせる環境を提供しています。",
  keywords: [
    "特別養護老人ホーム",
    "グループホーム",
    "認知症対応型共同生活介護",
    "介護施設",
    "野田村",
    "岩手県",
    "結の里",
    "ぬくもり",
    "健慈会",
    "ショートステイ",
    "デイサービス",
    "地域密着型介護老人福祉施設",
    "久慈市",
    "九戸郡",
  ],
  authors: [{ name: "社会福祉法人健慈会" }],
  creator: "社会福祉法人健慈会",
  publisher: "社会福祉法人健慈会",
  formatDetection: {
    telephone: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: BASE_URL,
    siteName: "社会福祉法人健慈会",
    title: "社会福祉法人健慈会 | 特別養護老人ホーム結の里・グループホームぬくもり",
    description:
      "岩手県野田村の特別養護老人ホーム結の里とグループホームぬくもり。地域密着型介護サービスで安心の暮らしを。",
    images: [
      {
        url: "/images/line_oa_chat_250210_120553.jpg",
        width: 1200,
        height: 630,
        alt: "社会福祉法人健慈会 施設全景",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "社会福祉法人健慈会 | 特別養護老人ホーム結の里・グループホームぬくもり",
    description:
      "岩手県野田村の特別養護老人ホーム結の里とグループホームぬくもり。地域密着型介護サービスで安心の暮らしを。",
    images: ["/images/line_oa_chat_250210_120553.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "./",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "0HxzKut8ly0u-N2qSS9XbotlVnbW1FpzGQaFEVfJClQ",
  },
  category: "healthcare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f8f5ef] text-[#1f1f1f]`}>
        <OrganizationJsonLd
          name="社会福祉法人健慈会"
          description="岩手県野田村の社会福祉法人健慈会が運営する特別養護老人ホーム結の里とグループホームぬくもり。地域密着型介護サービスで安心の暮らしを提供しています。"
          url={BASE_URL}
          logo={`${BASE_URL}/images/line_oa_chat_250210_120553.jpg`}
          address={{
            streetAddress: "大字玉川第5地割45-22",
            addressLocality: "野田村",
            addressRegion: "岩手県九戸郡",
            postalCode: "028-8202",
            addressCountry: "JP",
          }}
          telephone="0194-78-3290"
          faxNumber="0194-78-3297"
          openingHours="Mo-Fr 09:00-17:30"
          geo={{
            latitude: 40.1089,
            longitude: 141.8161,
          }}
        />
        <Header />
        <main className="container mx-auto my-8 px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
