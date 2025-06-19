import type { Metadata } from "next";
import { Magra } from "next/font/google";
import "./globals.css";

const magraSans = Magra({
  variable: "--magra-font",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "CerraDex",
  description: "Salvar o cerrado começa com conhecer quem vive nele.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${magraSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
