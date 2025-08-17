import {
  IBM_Plex_Mono,
  Merriweather,
  Montserrat,
  Roboto,
} from "next/font/google";

export const headingFont = Montserrat({
  subsets: ["latin"],
  variable: "--sans-font",
  style: ["italic", "normal"],
  weight: ["400", "500", "600", "700", "800"],
});

export const serifFont = Merriweather({
  subsets: ["latin"],
  variable: "--serif-font",
  weight: ["400", "700"],
  style: ["italic", "normal"],
});

export const sanSerifFont = Roboto({
  subsets: ["latin"],
  variable: "--body-font",
  weight: ["400", "500", "600", "700"],
  fallback: ["sans-serif"],
  style: ["italic", "normal"],
});

export const monoSpaceFont = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--mono-font",
  weight: ["400", "500", "600"],
});
