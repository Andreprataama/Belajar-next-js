import RootLayout from "@/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const MetaTitle = router.pathname === '/' ? 'Home' : router.pathname.replace ('/','')

  return (
    <RootLayout MetaTitle={MetaTitle}>
      <Component {...pageProps} />
    </RootLayout>
  )
}
