import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/ui/navbar";


export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
    >
              <div className="z-50 sticky top-4 flex justify-center">
          <div className="fixed top-4 flex justify-center">
            <Navbar />
          </div>
        </div>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
