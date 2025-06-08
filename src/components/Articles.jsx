import React from 'react'
import AnimatedText from './AnimatedText'
import cors from '../../public/images/cors.png'
import git from '../../public/images/cors.webp'
import Link from 'next/link'




const Article=({title,date,link})=>{
    return (
        <li
    className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0
      border border-solid border-dark border-r-4 border-b-4'>
    <Link href={link} target={'_blank'}>
            <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
            </Link>
    <span className='text-primary font-semibold pl-4'>{date}</span>
  </li>
    )
}
const Articles = () => {
  return (
    <div className='w-full h-min flex flex-col items-center justify-center overflow-hidden'>
   <AnimatedText text={'Words carry more power than weapons.'} classname='!text-6xl my-12'/>  
   <ul className='w-[90%]'>
    <Article title={'From Confusion to Clarity: A Developer’s Handbook on CORS'} link={'https://medium.com/@selvakumardurai5973/from-confusion-to-clarity-a-developers-handbook-on-cors-d499cc649853'} img={git} date={'may 2025'}/>
    <Article title={'Git Mastery: Essential Tools to Streamline Your Workflow'} link={'https://medium.com/@selvakumardurai5973/git-mastery-essential-tools-to-streamline-your-workflow-d7aa16b988ab'} img={cors} date={'june 2025'}/>
   </ul>
    </div>
  )
}

export default Articles
