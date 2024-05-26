import React from 'react'
import Tilt from 'react-tilt'
import {motion} from 'framer-motion'

import { styles } from '../style'
import { services } from '../cosnstants'
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc'

const ServiceCard =({index, title, icon})=>{
return (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div 
    variants={fadeIn('right', 'spring', 0.5 * index, 0.75 )}
    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <div 
      options={{
        max:45,
        scale:1,
        speed:450,
      }}
      className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img src={icon} alt={title}
        className='w-20 h-20 object-container'/>
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
    </motion.div>
  </Tilt>
)
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p  className={styles.sectionSubText}>Preface</p>
      <h2 className={styles.sectionHeadText}>OverView<span className='text-[#915eff]'>.</span></h2>
    </motion.div>

    <motion.p variants={fadeIn('', '', 0.1, 1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
    In the neon-lit labyrinth of the digital world, I am a ronin—a full-stack developer, artist, and game designer. 
    Creativity honed at the Fashion Institute of Technology (FIT), 
    my arsenal the Full Adobe Suite, Blender, and any type of camera. 
    Proficient in JavaScript and skilled with frameworks like React, Node.js, and Three.js, 
    I blend creativity with the technical. Welcome to my cyberpunk domain, where technology and art converge. 
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index)=> (
        <ServiceCard key={service.title}
          index={index}{...service}

        />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, 'about')