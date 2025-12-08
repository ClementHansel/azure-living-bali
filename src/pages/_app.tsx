// src/pages/_app.tsx
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";
import Layout from "../components/home/Layout";
import { useLenisScroll } from "@/hooks/useLenisScroll";
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Activate smooth scrolling globally
  useLenisScroll();

  // Global scroll handler for any page
  useEffect(() => {
    if (router.query.scrollTo) {
      const targetId = router.query.scrollTo as string;

      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  }, [router.query.scrollTo]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
