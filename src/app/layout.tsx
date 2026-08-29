import type { Metadata } from "next";
import { Instrument_Serif, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollMotion } from "@/components/scroll-motion";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Rafa'Na'ilah Septia, Software Engineer Portfolio", template: "%s, Rafa'Na'ilah Septia" },
  description: "A portfolio of backend systems, artificial intelligence projects, and interactive applications by Rafa'Na'ilah Septia.",
  keywords: ["Backend Engineer", "AI Enthusiast", "FastAPI", "LLM Integration", "Next.js", "TypeScript", "Developer Portfolio", "Software Engineer"],
  authors: [{ name: "Rafa'Na'ilah Septia" }],
  metadataBase: new URL("https://ranaise.vercel.app"),
  openGraph: {
    title: "Rafa'Na'ilah Septia, Software Engineer Portfolio",
    description: "Backend systems, artificial intelligence projects, and interactive applications.",
    url: "https://ranaise.vercel.app",
    siteName: "Rafa'Na'ilah Septia Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafa'Na'ilah Septia, Software Engineer Portfolio",
    description: "Backend systems, artificial intelligence projects, and interactive applications.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${inter.variable} ${instrumentSerif.variable}`}>
      <body className="min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ScrollMotion />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}



