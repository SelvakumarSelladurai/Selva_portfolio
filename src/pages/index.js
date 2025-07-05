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

      <main className="flex flex-col items-center text-dark dark:text-light px-4 sm:px-6 lg:px-12 py-10 min-h-screen bg-light dark:bg-dark">
        <Layout className="pt-0 w-full max-w-7xl">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-8 lg:gap-12">
            {/* Text Section */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <AnimatedText
                text="Where Imagination Meets Implementation"
                classname="text-4xl md:text-5xl lg:text-6xl font-bold"
              />
              <p className="my-4 text-base font-medium max-w-xl mx-auto lg:mx-0">
                Hi, I'm Selvakumar – a Python and Web Development enthusiast.
                Passionate about crafting engaging web experiences using HTML,
                CSS, JavaScript, and React. I'm also exploring Artificial
                Intelligence, Generative AI, and Machine Learning. Aspiring
                Front-End Developer driven by creativity and continuous
                learning.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-6">
                <Link
                  href="/Resume.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light dark:text-dark dark:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                >
                  Resume <MdArrowOutward fontSize={24} className="ml-2" />
                </Link>

                <Link
                  href="mailto:selvakumardurai5973@gmail.com"
                  className="text-lg font-medium text-white rounded-lg px-6 py-2.5"
                  style={{ background: "#8e16be" }}
                >
                  Contact
                </Link>

                <Link
                  href="https://github.com/SelvakumarSelladurai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium underline text-gray-700 dark:text-gray-300"
                >
                  GitHub
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80">
                <Image
                  src={selva}
                  alt="Selvakumar"
                  fill
                  className="rounded-full object-cover border-4 border-purple-500 shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </Layout>

        {/* Globe */}
        <div className="mt-10">
          <Image src={globe} alt="Globe" className="w-24 h-24 mx-auto" />
        </div>
      </main>
    </>
  );
}
