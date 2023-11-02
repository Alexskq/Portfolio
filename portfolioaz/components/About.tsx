"use client"
import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
     initial={{ opacity: 0 }}
     whileInView={{opacity: 1}}
     transition={{ duration: 1.5}}
     className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About
        </h3>

        <motion.img 
            initial={{
                x: -200,
                opacity:0,
            }}
            transition={{
                duration: 1.2
            }}
            whileInView={{
                x: 0,
                opacity:1
            }}
            viewport={{once: true}}
            // width={400}
            // height={400}
            src='/profil picture.jpg'
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]'
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                Here is a{" "} <span className='underline decoration-[#F7AB0A]'>little</span>{" "} background
            </h4>
            <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae atque totam vitae numquam soluta animi sequi magnam accusamus ipsum, voluptas, fugit tenetur excepturi inventore rerum. Ipsum, delectus. Quam, quibusdam id? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid placeat dolorem consectetur? Expedita quasi neque voluptatem praesentium explicabo, nihil alias accusantium quos pariatur dolore. Dolor repellat nulla voluptatum ipsum incidunt.</p>
        </div>
    </motion.div>
  )
}