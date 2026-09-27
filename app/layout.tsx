import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Souptik | Full Stack Developer & Minecraft Engineer",
  description:
    "Crafting digital experiences that move forward. Full Stack Developer, Minecraft Plugin & Mod Developer, and Backend Engineer.",
  keywords: [
    "Full Stack Developer",
    "Minecraft Developer",
    "Plugin Developer",
    "Mod Developer",
    "Backend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Java",
    "Kotlin",
  ],
  authors: [{ name: "Souptik" }],
  openGraph: {
    title: "Souptik | Full Stack Developer & Minecraft Engineer",
    description:
      "Crafting digital experiences that move forward.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceGrotesk.variable}`}>
      <head>
        <meta name="theme-color" content="#1E1E1E" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
