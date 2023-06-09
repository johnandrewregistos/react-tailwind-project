import React from 'react'
// countUp
import CountUp from 'react-countup'
// intersection observer
import {useInView} from 'react-intersection-observer'
// motion
import { motion } from 'framer-motion'
// variant
import { fadeIn } from '../variant'

export function About() {
  const [ref, inView] = useInView({threshold: 0.5,})
  return (
    <section className='section' id='about' ref={ref}>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/** Img */}
          <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='hidden lg:flex flex-1 bg-about bg-contain bg-no-repeat h-[640px] w-auto mix-blend-lighten bg-top rounded-full overflow-hidden'></motion.div>
          {/** Text */}
          <motion.div variants={fadeIn('left', 0.5)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1'>
            <h2 className='h2 text-accent'>About Me</h2>
            <h3 className='h3 mb-4'>I'm a Freelance Front-End Developer</h3>
            <p className='mb-3'>As a frontend web developer, I specialize in creating visually appealing and user-friendly websites and applications.</p>
            <h2 className='mb-6'>React.js | Tailwindcss | Bootstrap5 | HTML | CSS</h2>
            {/** stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={5} duration={3}/> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Months of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={52} duration={3}/> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects<br />
                  Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={3} duration={3}/> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <a href="#contact">
              <button className="btn btn-lg">Contact Me</button>
              </a>
              <a href="#work" className='text-gradient btn-link'>
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
