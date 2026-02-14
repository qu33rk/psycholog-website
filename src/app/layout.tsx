import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Psycholog Bydgoszcz - Wiktoria Szparaga | Terapia indywidualna i dla par",
  description: "Psycholog Bydgoszcz - Wiktoria Szparaga. Terapia poznawczo-behawioralna, konsultacje indywidualne i dla par. Umów wizytę!",
  alternates: {
    canonical: "https://wiktoriaszparaga.pl/",
  },
  openGraph: {
    title: "Psycholog Bydgoszcz - Wiktoria Szparaga",
    description: "Psycholog w Bydgoszczy. Terapia poznawczo-behawioralna, konsultacje indywidualne i wsparcie dla par.",
    type: "website",
    locale: "pl_PL",
    url: "https://wiktoriaszparaga.pl/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
