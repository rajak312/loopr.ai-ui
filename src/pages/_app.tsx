import NavBar from "@/components/custom-components/NavBar";
import SideBar from "@/components/custom-components/SideBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="h-full">
      <div className="flex h-full w-full">
        <div className="hidden sm:block">
          <SideBar />
        </div>
        <div className="w-full h-full">
          <NavBar />
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}
