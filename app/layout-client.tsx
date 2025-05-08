"use client";

import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import { Providers } from "./providers";
import { fontSans } from "@/config/fonts";
import Footer from "@/components/footer";
import Preloader from "@/components/Preloader";
import { Navbar } from "@/components/Nav/navbar";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans?.variable
        )}
      >       
        {isHomePage ? (
          <Preloader>
            <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
              <div className="relative flex flex-col h-screen">
                <Navbar />
                <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                  {children}
                </main>
                <Footer />
              </div>
            </Providers>
          </Preloader>
        ) : (
          <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
            <div className="relative flex flex-col h-screen">
              <Navbar />
              <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </Providers>
        )}
      </body>
    </html>
  );
}