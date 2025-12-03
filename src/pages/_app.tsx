import type { AppProps } from "next/app";
import "../styles/globals.css";
import Layout from "../components/home/Layout";
import { useLenisScroll } from "@/hooks/useLenisScroll";
import Header from "@/components/header/Header";
import { Footer } from "@/components/home/Footer";

export default function App({ Component, pageProps }: AppProps) {
  // Activate smooth scrolling globally
  useLenisScroll();

  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}
