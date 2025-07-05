// File: portfolio-main/src/pages/index.js

import Layout from "@/components/Layout";
import Image from "next/image";
import selva from "../../public/images/selva.png";
import globe from "../../public/images/globe.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Selvakumar | Home page</title>
      </Head>

      <main className="flex items-center text-dark min-h-screen dark:text-light">
        <Layout className="pt-0">
          <div className="px-4 sm:px-8 md:px-16">
            <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
              
              {/* Image Section */}
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <Image
                  src={selva}
                  alt="profile"
                  className="w-full h-auto"
                  priority
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
                />
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/2 flex flex-col items-center md:items-start self-center text-center md:text-left">
                <AnimatedText
                  text="Where Imagination Meets Implementation"
                  classname="text-6xl !text-left"
                />
                <p className="my-4 text-base font-medium">
                  Hi, I&apos;m Selvakumar – a Python and Web Development enthusiast.
                  Passionate about crafting engaging web experiences using HTML, CSS, JavaScript, and React.
                  I&apos;m also deeply interested in Artificial Intelligence, Generative AI, and Machine Learning.
                  An aspiring Front-End Developer driven by creativity, curiosity, and continuous learning across emerging technologies.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center mt-4 gap-4">
                  <Link
                    href="/Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-dark text-light p-2.5 px-6 
                      rounded-lg text-lg font-semibold hover:bg-light 
                      dark:text-dark dark:bg-light hover:text-dark 
                      border-2 border-solid border-transparent hover:border-dark"
                  >
                    Resume <MdArrowOutward fontSize={"30"} />
                  </Link>

                  <Link
                    href="mailto:selvakumardurai5973@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Selvakumar%2C%0A%0AI%20would%20like%20to%20get%20in%20touch%20with%20you..."
                    target="_blank"
                    className="text-lg font-medium capitalize dark:text-light text-white rounded-lg underline p-2.5 px-6"
                    style={{ background: "#8e16be" }}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Layout>

        {/* Globe Icon */}
        <div className="absolute right-8 bottom-8 inline-block w-48">
          <Image
            src={globe}
            className="w-24 h-25 mt-10 mx-auto"
            alt="globe"
          />
        </div>
      </main>
    </>
  );
}
