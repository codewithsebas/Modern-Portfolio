import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(true);
  const [lang, setLang] = useState(true);
  return (
    <Layout theme={theme} setTheme={setTheme} lang={lang} setLang={setLang}>
      <Component
        default="/home"
        theme={theme}
        lang={lang}
        setTheme={setTheme}
        {...pageProps}
      />
    </Layout>
  );
}
