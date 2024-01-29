import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amigo Secreto",
  description: "Faça o sorteio do seu amigo secreto online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="">{children}</body>
    </html>
  );
}
