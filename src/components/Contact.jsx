import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import {styles} from '../style'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
const [loading, setLoading] = useState(false);

const handelChange = (e) => {}

const handelSubmit = (e) => {}

  return (
    <div className=' xl:mt-12 xl:flex-rox flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div 
      variants={slideIn('left', 'tween', 0.2, 1)} 
      className='flex-[0.75] bg-black-100 p-8' >
        <p className={styles.sectionSubText}>Reach out?</p>
        <h3 className={styles.sectionHeadText}>
          Contact<span className='text-[#915eff]'>.</span>
          </h3>
          <form 
          ref={formRef}
          onSubmit={handelSubmit}
          className='mt-12 flex flex-col gap-8'>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Handel</span>
              <input 
              type='text' 
              name='name'
              value={form.name}
              onChange={handelChange}
              placeholder='Who are you?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Email</span>
              <input 
              type='email' 
              name='email'
              value={form.email}
              onChange={handelChange}
              placeholder='Email here'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>The Message</span>
              <textarea
              rows={7}
              name='meeage'
              value={form.message}
              onChange={handelChange}
              placeholder='What do you want?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
            </label>
            <button 
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white text-bold shadow-md shadow-primary rounded-xl'> 
            {loading ? 'Sending...' :'Send' }
            </button>
          </form>
      </motion.div>

      <motion.div variants={slideIn('right', 'tween', 0.2, 1)}
      className='xl:flex-1 xl:h-auto md:h-[55px] h-[350px]'>

      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')