import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { IoSunnySharp } from "react-icons/io5";
import useThemeSwitcher from './hooks/useThemeSwitcher'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsFillMoonStarsFill } from "react-icons/bs";
const CustomLink= ({href,title,className=""})=>{
  const router = useRouter()
  return (
    <Link href={href} className={`${className} relative group`}>{title}
    <span className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full
    transition-[width] ease duration-300 dark:bg-light ${router.asPath == href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
    </Link>
  )
}

 
const Navbar = () => {
  const [mode,setmode]=useThemeSwitcher()
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative'>
 <div className='w-full flex justify-between items-center lg:hidden'>
 <nav>
        <CustomLink href="/" title={'Home'} className='mr-4'/>
        <CustomLink href='/about' title={'About'} className='mx-4'/>
        <CustomLink href='/projects' title={'Projects'} className='mx-4'/>
        <CustomLink href='/contact' title={'Contact'} className='ml-4'/>
      </nav>
      
      <nav className='flex items-center justify-center flex-wrap'>
        <motion.a href={'https://www.linkedin.com/in/selvakumar-s-738686284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} target={"_blank"} whileHover={{y:-2}} className='w-8 mr-3'
        whileTap={{scale:0.9}}><FaLinkedin fontSize={'35'} color='#2390de'/></motion.a>
        <motion.a href={'https://github.com/Selvakumar5973'} target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} 
        className='w-8 ml-3'><FaGithub fontSize={'35'} /></motion.a>
        <button onClick={()=>setmode(mode==="light"?"dark":"light")}
          className={`ml-5 flex items-center justify-center rounded-full padding-1
          }`}>
{mode==="dark"?<IoSunnySharp fontSize={'30'}/>:<BsFillMoonStarsFill  fontSize={'30'}/>}
        </button>
      </nav>
 </div>


      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        
      <Logo/>
      </div>
    </header>
  )
}

export default Navbar
