import "../styles.css";
import "nextra-theme-docs/style.css";
import { useEffect } from "react";

export default function Nextra({ Component, pageProps }) {
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
