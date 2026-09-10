import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bappa Ka Prashad 6.0 | GDG On Campus, Ramdeobaba University",
  description: "An annual competitive programming contest organized by GDG On Campus, Ramdeobaba University, blending technology, algorithms, and Ganesh Chaturthi tradition.",
  icons: {
    icon: "/gdg-logo-black.png",
    shortcut: "/gdg-logo-black.png",
    apple: "/gdg-logo-black.png",
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
