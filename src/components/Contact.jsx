import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../style';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    // Validation
    if (!value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '(ノ ゜Д゜)ノ ︵ ┻━┻ This field is required',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
      }));
    }

    if (name === 'email' && value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: validateEmail(value) ? '' : 'Invalid email address',
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (!value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '(ノ ゜Д゜)ノ ︵ ┻━┻ This field is required',
      }));
    }

    if (name === 'email' && value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: validateEmail(value) ? '' : 'Invalid email address',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;
    const newErrors = {};

    // Check for empty fields and invalid email
    Object.keys(form).forEach((key) => {
      if (!form[key]) {
        newErrors[key] = '(ノ ゜Д゜)ノ ︵ ┻━┻ This field is required';
        hasError = true;
      } else {
        newErrors[key] = '';
      }
    });

    if (!validateEmail(form.email)) {
      newErrors.email = 'Invalid email address';
      hasError = true;
    }

    setErrors(newErrors);

    if (hasError) {
      return;
    }

    setLoading(true);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Odesii',
        from_email: form.email,
        to_email: import.meta.env.VITE_APP_EMAIL,
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
    .then(
      () => {
        setLoading(false);
        alert('Message is on the way!ദ്ദി´▽`)');

        setForm({
          name: '',
          email: '',
          message: '',
        });
      },
      (error) => {
        setLoading(false);
        console.error(error);
        alert('Σ(°□°´Ⅲ)!!? something went wrong. try again.');
      }
    );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 bg-opacity-55 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Reach Out</p>
        <h3 className={styles.sectionHeadText}>Contact<span className='text-[#915eff]'>.</span></h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your handle<span className='text-[#915eff]'>.</span></span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Who are you?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            {errors.name && <span className='text-red-500'>{errors.name}</span>}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email<span className='text-[#915eff]'>.</span></span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            {errors.email && <span className='text-red-500'>{errors.email}</span>}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message<span className='text-[#915eff]'>.</span></span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='What do you want?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            {errors.message && <span className='text-red-500'>{errors.message}</span>}
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
