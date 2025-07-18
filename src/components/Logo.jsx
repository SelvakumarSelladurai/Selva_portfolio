import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import {  Allura } from 'next/font/google';
const MotionLink = motion(Link)
const alexBrush = Allura({
  subsets: ['latin'],
  weight: '400',
});
const Logo = () => {

  return (
    <div className='flex items-center justify-center mt-2'>
    <MotionLink 
      href='/' 
      className={`w-16 h-16 bg-dark text-light text-center py-4 px-1 rounded-full text-3xl font-bold ${alexBrush.className}
     border border-solid border-transparent dark:border-light`} 
      whileHover={{
        backgroundColor: [
          "#121212", 
          "rgba(131,58,180,1)", 
          "rgba(253,29,29,1)", 
          "rgba(252,176,69,1)", 
          "rgba(131,58,180,1)", 
          "#121212"
        ],
        transition: { duration: 1.5, repeat: Infinity }
      }}
    >
      SK
    </MotionLink>
  </div>
  )
}

export default Logo
