import React from 'react'
// motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../variant'
// img
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'
import Img4 from '../assets/portfolio-img4.png'

export const Work = () => {
  const View = () => {
    document.querySelector('#text').classList.add('hidden');
    document.querySelector('#img').classList.remove('hidden');
  };
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>          
          <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* text */}
            <div id='text'>
              <h2 className='h2 leading-tight text-accent'>My Latest <br />
              Work</h2>
              <p className='max-w-sm mb-16'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus provident reprehenderit fugiat ratione iure delectus </p>
              <button onClick={View} className='btn btn-sm'>View all projects</button>
            </div>
            {/** Image */}
            <a href="https://johnandrewregistos.github.io/mrstudio/" target='_blank'>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/** overlay */}
              <div className='group-hover:bg-black/75 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/** img */}
              <img src={Img1} alt="" className='group-hover:scale-125 transition-all duration-500' />
              {/** pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              {/** Title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>MrStudio Website</span>
              </div>
            </div>
            </a>
            <a href="https://johnandrewregistos.github.io/Ciseco-Website/" target='_blank'>
            <div className='hidden group relative overflow-hidden border-2 border-white/50 rounded-xl' id='img'>
              {/** overlay */}
              <div className='group-hover:bg-black/75 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/** img */}
              <img src={Img4} alt="" className='group-hover:scale-125 transition-all duration-500' />
              {/** pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              {/** Title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Ciseco Store</span>
              </div>
            </div>
            </a>
          </motion.div>
          <motion.div variants={fadeIn('left', 0.2)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1 flex flex-col gap-y-10'>
            {/** Image */}
            <a href="https://johnandrewregistos.github.io/feb21/" target='_blank'>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/** overlay */}
              <div className='group-hover:bg-black/75 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/** img */}
              <img src={Img2} alt="" className='group-hover:scale-125 transition-all duration-500' />
              {/** pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              {/** Title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>E-Learning Website</span>
              </div>
            </div>
            </a>
            <a href="https://johnandrewregistos.github.io/Wedding-Company/" target='_blank'>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/** overlay */}
              <div className='group-hover:bg-black/75 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/** img */}
              <img src={Img3} alt="" className='group-hover:scale-125 transition-all duration-500' />
              {/** pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              {/** Title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Wedding Site</span>
              </div>
            </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
