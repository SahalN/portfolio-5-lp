/** @format */

import { IBM_Plex_Mono, Raleway } from "next/font/google";

export const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const ibmplexmono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibmplexmono",
  weight: "400",
});
