import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manellore Groups — Your Problems. Our Solutions.",
  description: "Practical technology solutions across software, hardware, data, cloud, and support.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
