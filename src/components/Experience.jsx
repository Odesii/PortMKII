import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css'; 
import { styles } from "../style";
import { experiences } from "../cosnstants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useState } from "react";
import  Modal  from "../utils/modal"; // Adjust the import path as needed
import { Download } from "../assets";

// this maps through all the experience from the const folder and sets them on the timeline with their points and date and icons
const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #1d1836' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBG }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img src={experience.icon}
          alt={experience.company_name}
          className='w-60% h-60% object-contain' />
      </div>
    }
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
      <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>{experience.company_name}</p>
    </div>
    <ul className='mt-5 ml-5 list-disc space-y-2'>
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className='text-white-100 text-[14px] pl-1 tracking-wider'
        >{point}</li>
      ))}
    </ul>
  </VerticalTimelineElement>
)
// sets the main body experience on the timeline 
const Experience = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>What I've done</p>
        <h2 className={styles.sectionHeadText}>The Work<span className='text-[#915eff]'>.</span></h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
          <VerticalTimelineElement
            date = 'Resume Download ►'
            icon = {
              <a href='#' onClick={handleModalOpen}>
                <img className='w-[100px] ' src={Download} alt='Download' />
              </a>
            }
            iconStyle={{ background: '#1d1836', color: '#fff' }}
          />
        </VerticalTimeline>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <p>No Resume at the moment!</p>
      </Modal>
    </>
  )
}

export default SectionWrapper(Experience, 'work')