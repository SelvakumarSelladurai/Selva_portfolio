import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import {Poppins} from 'next/font/google'
import Head from "next/head";
const poppins = Poppins({subsets:['latin'],variable:'--font-pop',weight:'500'})
export default function App({ Component, pageProps }) {
  return (
   <>
   <Head>

   </Head>
    <main className={`poppins.className font-pop bg-light w-full min-h-screen dark:bg-dark`}>
      <Navbar/>
    <Component {...pageProps} />
    <Footer/>
    </main>
   </>
  )
}
