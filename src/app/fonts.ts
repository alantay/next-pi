import { Inter, Manrope, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";

export const satoshi = localFont({
  src: "../../public/fonts/Satoshi-Variable.woff2",
  style: "normal",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  // weight: ["400", "700"],
});

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "700"],
});

export const ibm = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm",
  weight: ["400", "700"],
});

export const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-mono",
  weight: ["400", "700"],
});
