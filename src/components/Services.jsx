import React from 'react'
// icons
import { BsArrowUpRight } from 'react-icons/bs'
//  motion
import { motion } from 'framer-motion'
// variant
import { fadeIn } from '../variant'

// service data
const services = [
  {
    name: 'Freelancer',
    description: 'As a freelance web developer I am responsible for designing, building, and maintaining websites for clients. I work independently, often from home, and are responsible for managing my own time and workload. ',
    link: 'Learn More',
  },
  {
    name: 'Web Developer',
    description: 'As a web developer I am responsible for designing, building, and maintaining websites for businesses, organizations, and individuals. I work collaboratively with designers, project managers, and other developers to create functional, visually appealing websites that meet the needs of clients and users.',
    link: 'Learn More',
  }
];

export function Services() {
  return (
    <section className='section' id='services'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/**Text & Images */}
          <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1  mb-12 lg:mb-0'>
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">I'm a Freelance Front-End Developer.</h3>
            <a href="#work">
            <button className="btn btn-sm">See my work</button>
            </a>
          </motion.div>
          {/**Services */}
          <motion.div variants={fadeIn('left', 0.5)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1'>
            {/**Services List */}
            <div className='flex-1'>
              {services.map((service, index)=> {
                //destructure service
                const {name, description} = service;
                return (
                    <div className='border-b border-white/20 h-auto mb-[38px] flex' key={index}>
                      <div className='max-w-[476px]'>
                        <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                        <p className='font-secondary leading-tight'>{description}</p>
                      </div>
                    </div>
                  )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
