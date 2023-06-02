"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Modal from "@/components/Modal/Modal";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/theme.scss";

export const metadata = {
  title: "Grouwthus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Modal videoLink="https://www.youtube.com/embed/D0UnqGm_miA" />
      </body>
    </html>
  );
}
