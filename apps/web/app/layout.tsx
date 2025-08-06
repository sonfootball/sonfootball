import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SonFootball - Giày đá bóng chính hãng",
  description:
    "Nơi mua giày đá bóng uy tín nhất Việt Nam. Chuyên cung cấp giày đá bóng chính hãng 100% từ các thương hiệu hàng đầu như Nike, Adidas, Puma, Mizuno.",
  keywords:
    "giày đá bóng, giày bóng đá, nike, adidas, puma, mizuno, chính hãng",
  authors: [{ name: "SonFootball" }],
  openGraph: {
    title: "SonFootball - Giày đá bóng chính hãng",
    description: "Nơi mua giày đá bóng uy tín nhất Việt Nam",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased">{children}</body>
    </html>
  );
}
