import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Viewport } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
});

// export const viewport: Viewport = {
//   themeColor: [
//     { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
//     { media: "(prefers-color-scheme: light)", color: "#fff" },
//   ],
// };

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
