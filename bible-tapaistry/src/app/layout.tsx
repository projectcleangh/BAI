import type { Metadata } from "next";
import "./globals.css";
import { AccessibilityProvider } from "@/contexts/AccessibilityContext";

export const metadata: Metadata = {
  title: "Bible TapAIstry | Scripture Overview Experience",
  description: "A dynamic, semantic, and accessible scripture overview experience. Read, engage, and understand God's word.",
  keywords: ["Bible", "Scripture", "Genesis", "Eden", "Christian", "Accessible"],
  authors: [{ name: "Bible TapAIstry" }],
  openGraph: {
    title: "Bible TapAIstry",
    description: "A dynamic scripture overview experience",
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
      <body className="antialiased bg-zinc-950 text-zinc-100">
        <AccessibilityProvider>
          {children}
        </AccessibilityProvider>
      </body>
    </html>
  );
}
