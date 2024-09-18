import { ReduxProvider } from "./components/ReduxProvider";
import localFont from "next/font/local";

import "./globals.css";

const Vazirmatn = localFont({
  src: [
    {
      path: "./fonts/Vazirmatn[wght].ttf",
      weight: "100 900",
    },
  ],
  variable: "--font-custom",
  display: "swap",
});

export const metadata = {
  title: "Create Form",
  description: "Send Info Form",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${Vazirmatn.variable} antialiased`}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
