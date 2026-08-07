import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Justin Rosales — CS Student & Developer",
  description:
    "Personal portfolio of Justin Rosales, a Computer Science student at the University of Michigan building full-stack web apps, machine learning systems, and research software.",
  icons: [
    { rel: "icon", url: "/icon.svg", type: "image/svg+xml" },
    { rel: "icon", url: "/icon.jpg" },
  ],
  openGraph: {
    title: "Justin Rosales — CS Student & Developer",
    description:
      "Computer Science student at the University of Michigan building full-stack web apps, ML systems, and research software.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
