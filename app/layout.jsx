import "../styles/globals.css";
import "../styles/theme.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { metadata } from "./metadata";

export { metadata };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DefaultSeo {...SEO} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
