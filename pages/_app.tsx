import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
	const [theme, setTheme] = useState(false);
	return (
		<Layout theme={theme} setTheme={setTheme}>
			<Component theme={theme} {...pageProps} />
		</Layout>
	);
}
