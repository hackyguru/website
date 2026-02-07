import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/ui/navbar";
import { PageTransitionProvider } from "@/components/providers/page-transition";


export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
    >
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <PageTransitionProvider>
        <Component {...pageProps} />
      </PageTransitionProvider>
    </ThemeProvider>
  );
}
