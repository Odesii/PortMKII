import React,  {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {styles} from '../style';
import { navLinks } from '../cosnstants';
import {logo, menu, close} from '../assets';


const Navbar = () => {
const [active, setActive] = useState("");
const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-y fixed top-o z-20 bg-primary bg-opacity-75`}>
      <div className="w-full flex justify-between item-center max-w-7xl mx-auto">
        <Link 
          to="/" 
          className="flex items-center gap-2" 
          onClick={()=> {
            setActive("");
            window.scrollTo(0,0);
          }}>
            <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
            <p className=" text-white text-[18-px] font-bold cursor-pointer flex">[ &nbsp;<span className='text-[#915eff]'>Odesii</span>&nbsp; ]</p>
        </Link>
        {/* Goes through the nav and displays each title with a link as separate elements*/}
        {/* set them to white when clicked and updates the state change */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) =>(
            <li
            key={link.id}
            className={`${
              active === link.title
              ? "text-white"
              :"text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={()=> setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        {/* this is a smaller menu for small screens */}
          <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ?close : menu}
          alt='menu'
          className='w-[28] h-[28]object-container'
          onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-10 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className="list-none flex justify-end items-start flex-col gap-4">
          {navLinks.map((link) =>(
            <li
            key={link.id}
            className={`${
              active === link.title
              ? "text-white"
              :"text-secondary"
            } font-poppins font-medium cursor-pointer text-[16px]`}
            onClick={()=> {
              setActive(link.title);
              setToggle(!toggle)
            }}
            >

              <a href={`#${link.id}>`}>{link.title}</a>
            </li>
          ))}
        </ul>
          </div>
          </div>
      </div>
    </nav>
  )
}

export default Navbar