import type { Metadata } from "next";
import { Instrument_Serif, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
  variable: "--font-logo",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rafa'Na'ilah Septia | Backend Engineer & AI Enthusiast",
  description: "Creative developer portfolio of Rafa'Na'ilah Septia, specializing in backend systems, AI-powered applications, and scalable software architectures.",
  keywords: ["Backend Engineer", "AI Enthusiast", "FastAPI", "LLM Integration", "Next.js", "TypeScript", "Developer Portfolio", "Software Engineer"],
  authors: [{ name: "Rafa'Na'ilah Septia" }],
  metadataBase: new URL("https://rafanailah.dev"),
  openGraph: {
    title: "Rafa'Na'ilah Septia | Backend Engineer & AI Enthusiast",
    description: "Creative developer portfolio of Rafa'Na'ilah Septia, specializing in backend systems, AI-powered applications, and scalable software architectures.",
    url: "https://rafanailah.dev",
    siteName: "Rafa'Na'ilah Septia Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafa'Na'ilah Septia | Backend Engineer & AI Enthusiast",
    description: "Creative developer portfolio of Rafa'Na'ilah Septia, specializing in backend systems, AI-powered applications, and scalable software architectures.",
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
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${instrumentSerif.variable} antialiased min-h-screen text-foreground transition-colors duration-300 font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}



