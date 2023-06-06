"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/theme.scss";

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
