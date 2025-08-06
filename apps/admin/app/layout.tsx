import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SonFootball Admin - Quản lý hệ thống",
  description:
    "Bảng điều khiển quản lý hệ thống SonFootball. Quản lý sản phẩm, đơn hàng, khách hàng và báo cáo doanh thu cho website bán giày đá bóng chính hãng.",
  keywords:
    "admin dashboard, quản lý hệ thống, sonfootball admin, quản lý sản phẩm, quản lý đơn hàng, báo cáo doanh thu",
  authors: [{ name: "SonFootball Admin" }],
  robots: "noindex, nofollow", // Admin pages should not be indexed
  openGraph: {
    title: "SonFootball Admin - Quản lý hệ thống",
    description: "Bảng điều khiển quản lý hệ thống SonFootball",
    type: "website",
    siteName: "SonFootball Admin",
  },
  twitter: {
    card: "summary_large_image",
    title: "SonFootball Admin - Quản lý hệ thống",
    description: "Bảng điều khiển quản lý hệ thống SonFootball",
  },
  manifest: "/admin-manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3b82f6",
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
