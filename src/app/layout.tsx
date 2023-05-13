import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chainiversity",
  description: "Learn Chainlink Development with Chainiversity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-full`}>
        <div className="main">
          <div className="gradient" />
        </div>

        <header>
          <Nav />
        </header>
        <main className="app h-full">{children}</main>
      </body>
    </html>
  );
}
