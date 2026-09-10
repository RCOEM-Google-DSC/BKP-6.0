import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bappa Ka Prashad 6.0 | GDG On Campus, Ramdeobaba University",
  description: "An annual competitive programming contest organized by GDG On Campus, Ramdeobaba University, blending technology, algorithms, and Ganesh Chaturthi tradition.",
  icons: {
    icon: "/favicon.ico?v=2",
    shortcut: "/favicon.ico?v=2",
    apple: "/favicon.png?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
