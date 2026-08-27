import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saudi800800 | الحسابات الرسمية",
  description: "الروابط الرسمية لحسابات Saudi800800 على منصات التواصل الاجتماعي.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
