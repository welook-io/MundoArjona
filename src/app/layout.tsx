import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mundo Arjona | Propuesta Comercial - Kalia",
  description: "Implementación de Chat con IA para la venta de paquetes VIP",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${GeistSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
