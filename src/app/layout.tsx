import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Deepanjay Nandal",
  description: "Software Engineer. Building scalable systems and meaningful products.",
  robots: "index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1",
  openGraph: {
    title: "Deepanjay Nandal",
    description: "Software Engineer. Building scalable systems and meaningful products.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepanjay Nandal",
    description: "Software Engineer. Building scalable systems and meaningful products.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistMono.variable} font-mono antialiased min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="max-w-4xl mx-auto px-4 py-8">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
