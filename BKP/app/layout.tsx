import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bappa Ka Prashad 6.0 | GDG on Campus, Ramdeobaba University",
  description:
    "The annual competitive programming contest hosted on CodeChef by GDG on Campus, Ramdeobaba University. A rigorous celebration of logic, community, and devotion. Join us for our most expansive edition yet.",
  openGraph: {
    title: "Bappa Ka Prashad 6.0",
    description:
      "The annual competitive programming contest hosted on CodeChef by GDG on Campus, Ramdeobaba University.",
    type: "website",
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
