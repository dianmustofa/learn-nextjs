import "@/styles/globals.css";
import type { AppProps } from "next/app";
import RootLayout from "@/layout";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const metaTitle =
    router.pathname == "/" ? "home" : router.pathname.replace("/", "");

  console.log("router =>", router);

  return (
    // <RootLayout title="nama saya">
    <RootLayout metaTitle={metaTitle}>
      <Component {...pageProps} />
    </RootLayout>
  );
}
