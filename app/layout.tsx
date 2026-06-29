import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jhobet Michael Bea — Software Engineer",
  description:
    "Software Engineer from the Philippines. Flutter Developer, Automation Engineer, and Web Developer. Open to international opportunities.",
  openGraph: {
    title: "Jhobet Michael Bea — Software Engineer",
    description:
      "Building software that solves real-world problems through mobile applications, web development, and workflow automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
