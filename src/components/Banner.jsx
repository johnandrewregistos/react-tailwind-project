import React from 'react'
// Images
import Image from '../assets/PROFILE.png'
// Icons
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
// Type animation
import { TypeAnimation } from 'react-type-animation'
//motion
import { motion } from 'framer-motion'
//variants
import { fadeIn } from '../variant'

export const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/** text */ }
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>John <span>Andrew</span></motion.h1>
            <motion.div variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]' >
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation sequence={[
                'Web Developer', 2000, 'Freelancer', 2000,
              ]} speed={50} className='text-accent' wrapper='span' repeat={Infinity} />
            </motion.div>
            <motion.p variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-8 max-w-lg mx-auto lg:mx-0'>I am confident in my ability to contribute to the success of your team.</motion.p>
            <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <a href="#contact">
              <button className='btn btn-lg'>Contact Me</button>
              </a>
              <a href="#work" className='text-gradient btn-link'>My Portfolio</a>
            </motion.div>
            {/**socials*/}
              <motion.div variants={fadeIn('up', 0.7)} initial="hidden" whileInView={'show'} className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
                <a href="https://www.linkedin.com/in/registosjohnandrew/" target='_blank'>
                  <FaLinkedin />
                </a>
                <a href="https://github.com/johnandrewregistos" target='_blank'>
                  <FaGithub />
                </a>
                <a href="https://www.facebook.com/relateandreview" target='_blank'>
                  <FaFacebook />
                </a>
              </motion.div>
          </div>
          {/** Image */}
          <motion.div variants={fadeIn('down', 0.5)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img className='rounded-full' src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
