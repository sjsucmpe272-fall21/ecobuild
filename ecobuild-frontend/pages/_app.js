import "tailwindcss/tailwind.css";
import "../styles.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>EcoBuild</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
