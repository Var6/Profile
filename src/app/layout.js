import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rishabh Ranjan",
  description: "Explore Rishabh Ranjan's portfolio showcasing a collection of innovative web development projects. With expertise in HTML, CSS, JavaScript, React, Next, NextJS, TailwindCSS,Tailwind,TypeScript and more, Rishabh delivers elegant solutions for modern web experiences. Connect with Rishabh to collaborate on your next project or learn more about his work"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
