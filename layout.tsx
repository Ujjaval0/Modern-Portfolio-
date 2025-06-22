import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import "./custom-styles.css";
import ClientLayout from "./client-layout";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ujjaval Bhardwaj | AI & Automation Solutions",
  description: "Portfolio of Ujjaval Bhardwaj, a creative prompt engineer and web developer specializing in AI and automation solutions.",
  keywords: ["Ujjaval Bhardwaj", "AI Engineer", "Web Developer", "Prompt Engineer", "Portfolio", "Automation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={spaceGrotesk.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
