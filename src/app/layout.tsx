import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Etobicoke Plumbing - Professional Plumbing Services in Etobicoke, ON",
  description: "Get top-quality plumbing services in Etobicoke, ON at Etobicoke Plumbing. Professional and reliable plumbing solutions. Book your service today!",
  icons: {
    icon: "/favicon.ico"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientBody>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </div>
      </ClientBody>
    </html>
  );
}
