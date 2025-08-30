import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vishvendra Singh Khangarot - Senior Full-Stack Developer",
  description: "Senior Full-Stack Developer with 7+ years of experience delivering high-performance web and mobile applications for global clients including Google and DBS Bank.",
  keywords: [
    "Vishvendra Singh Khangarot",
    "Full-Stack Developer",
    "React Developer",
    "Angular Developer",
    "Node.js Developer",
    "Mobile Developer",
    "Portfolio",
    "Web Development",
    "Software Engineer"
  ],
  authors: [{ name: "Vishvendra Singh Khangarot" }],
  creator: "Vishvendra Singh Khangarot",
  publisher: "Vishvendra Singh Khangarot",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vishvendrask.vercel.app",
    title: "Vishvendra Singh Khangarot - Senior Full-Stack Developer",
    description: "Senior Full-Stack Developer with 7+ years of experience delivering high-performance web and mobile applications for global clients including Google and DBS Bank.",
    siteName: "Vishvendra Singh Khangarot Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vishvendra Singh Khangarot - Senior Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishvendra Singh Khangarot - Senior Full-Stack Developer",
    description: "Senior Full-Stack Developer with 7+ years of experience delivering high-performance web and mobile applications for global clients including Google and DBS Bank.",
    images: ["/og-image.jpg"],
    creator: "@vishvendrask",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
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
