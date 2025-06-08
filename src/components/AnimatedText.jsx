import React from 'react'
import { motion } from 'framer-motion'
const h1 = {initial:{opacity:0},
animate:{opacity:1,transitition:{delay:0.8,staggerChildren:0.08}}}
const span = {
    initial:{
        opacity:1,y:50
    },
    animate:{y:0,opacity:1,transition:{
        duration:1
    }}
}
const AnimatedText = ({text,classname=""}) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
   <motion.h1 className={`${classname} inline-block w-full dark:text-light text-dark font-bold capitalize`} variants={h1} initial="initial" animate="animate">
    {text.split(" ").map((word,idx)=>(
<motion.span key={idx} className='inline-block' variants={span}>{word}&nbsp;</motion.span>
   ))}</motion.h1>   
    </div>
  )
}

export default AnimatedText
