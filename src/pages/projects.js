import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import tia from '../../public/images/tia.jpg'
import codingPic from '../../public/images/coding.jpg'
import ecomPic from '../../public/images/ecom.jpg'
import Sk from '../../public/images/Sk.webp'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Articles from '@/components/Articles'
import { FaGithub } from 'react-icons/fa'
const Major = ({type,title,summary1,summary2, img,link,git})=>{
    return (
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark
        bg-light shadow-2xl p-8 relative rounded-br-2xl dark:bg-dark dark:border-light'>
    <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl'/>
<Link href={link} target={'_blank'} className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
<Image src={img} alt={title} className="w-full h-auto" priority
          sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 50w"/>
</Link>
<div className='w-1/2 flex flex-col items-start justify-between pl-6'>
    <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
    <Link href={link} target={'_blank'}>
<h2 className='m-2 w-full text-left text-4xl dark:text-light font-bold hover:underline underline-offset-2'>{title}</h2>
</Link> 
<p className='my-2 font-medium text-dark dark:text-light'>{summary1}</p>
<p className='my-2 font-medium text-dark dark:text-light'>{summary2}</p>
<div className='mt-2 flex items-center'>
<Link href={git} target={'_blank'} className='w-10'><FaGithub fontSize={'30'} className='dark:text-white'/></Link>
<Link href={link} target={'_blank'} className='ml-4 dark:bg-light dark:text-dark
 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'>Visit</Link>
</div>
</div>

        </article>
    )
}

const Minor = ({type,title, img,link,git})=>{
return (
    <article className='w-full flex flex-col 
    items-center justify-center rounded-2xl border border-solid border-dark dark:border-light dark:bg-dark bg-light p-6 relative'>
    <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] dark:bg-light bg-dark rounded-br-3xl'/>
<Link href={link} target={'_blank'} className='w-full cursor-pointer overflow-hidden rounded-lg'>
<Image src={img} alt={title} className="w-full h-auto"/>
</Link>
<div className='w-full flex flex-col items-start justify-between mt-4'>
    <span className='text-primary font-medium dark:text-primaryDark text-lg'>{type}</span>
    <Link href={link} target={'_blank'}>
<h2 className='m-2 w-full text-left text-4xl font-bold hover:underline dark:text-light underline-offset-2'>{title}</h2>
</Link> 

<div className='w-full mt-2 flex items-center justify-between'>
<Link href={git} target={'_blank'} className='w-8'><FaGithub fontSize={'30'} className='dark:text-white'/></Link>
<Link href={link} target={'_blank'} className='text-lg font-semibold underline underline-offset-2 dark:text-white'>Visit</Link>
</div>
</div>

        </article>
)
}
const projects = () => {
  return (
    <>
    <Head>
      <title>Selvakumar | Projects page</title>
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className={'pt-16'}>
            <AnimatedText text={"Real-world projects turn developers into experts."} classname='!text-6xl mb-16'/>
            <div className='grid grid-cols-12 gap-24'>
                <div className='col-span-12'>
                <Major
  title="Collaborative coding platform"
  summary1="The ultimate destination for coding enthusiasts to collaborate, compete, and grow together. Join teams effortlessly and engage in thrilling coding contests that push your skills to new heights. With a focus on fostering innovation and community"
  summary2="It offers a platform where you can showcase your talents, learn from peers, and achieve coding excellence. Whether you're aiming to win contests, enhance your skills, or connect with like-minded individuals, CodeQuest provides the tools and environment to support your coding journey. Start exploring today and unleash your full potential in the world of programming."
  link={"https://code-quest-git-main-vaishalis-projects-3c5b334d.vercel.app/"}
  type={"Major project"}
  git={"https://github.com/Selvakumar5973/CodeCrafters"}
  img={codingPic}
/>

                </div>
                <div className='col-span-6'>
                    <Minor title="TIA RISK PREDICTION"
                    link={"https://github.com/Selva5973/Selvakumar"} type={"Mini Project"} git={"https://github.com/Selva5973/Selvakumar"} img={tia}/>
                    
                    </div>
                    <div className='col-span-6'>
                  
                    <Minor title="E-Commerce Website"
                    link={"/"} type={"Minor Project"} git={"https://github.com/Selvakumar"} img={ecomPic}/>
                    </div>
                    <div className='col-span-6'>
                  
                    <Minor title="STOCK PRICE PREDICTION"
                    link={"/"} type={"Project"} git={"https://github.com/Selva5973/STOCK/tree/main"} img={Sk}/>
                    </div>
      
            </div>
            
            <Articles/>
        </Layout>
      
      </main>
    </>
  )
}

export default projects
