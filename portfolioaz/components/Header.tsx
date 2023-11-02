import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {} 

function Header({}: Props) {
  return (
    <div className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <div
        className='flex flex-row items-center'>
            {/* Social Icons */}
            <SocialIcon 
            url="https://twitter.com"
            fgColor='gray'
            bgColor='transparent'
             />

            <SocialIcon 
            url="https://www.linkedin.com"
            fgColor='gray'
            bgColor='transparent'
             />

            <SocialIcon 
            url="https://www.github.com"
            fgColor='gray'
            bgColor='transparent'
             />
        </div>

        <div className='flex flex-row items-center text-gray-300 cursor-pointer'>
            <SocialIcon 
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
             />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in Touch</p>
            <p>le vrai</p>
        </div>
    </div>

  )
  
}

export default Header