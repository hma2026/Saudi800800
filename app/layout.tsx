import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./samsung-fix.css";

export const metadata: Metadata = {
  title: "Saudi800800 | الحسابات الرسمية",
  description: "الروابط الرسمية لحسابات Saudi800800 على منصات التواصل الاجتماعي.",
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#011914",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
