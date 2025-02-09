import "@/styles/globals.css";

import { Providers } from "./providers";

import { Fira_Code as FontMono } from "@fontsource/fira-code";
import { Inter as FontSans } from "@fontsource/inter";
import NavBar from "./components/NavBar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${fontSans.variable} ${fontMono.variable} font-sans`}>
      <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
        <main className="relative flex flex-col h-screen w-screen">
          <NavBar />
          {children}
        </main>
      </Providers>
    </div>
  );
}
