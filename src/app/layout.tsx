import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Guia 30 Dias: O Resgate das Exatas | Vetorial Estudos",
  description:
    "O cronograma estratégico de 30 dias para vencer a ansiedade e gabaritar as questões mais cobradas de Matemática Básica no ENEM, Vestibulares e Concursos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="font-sans antialiased bg-[#08080a] text-[#f4f4f6] selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
