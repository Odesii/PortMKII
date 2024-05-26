import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css'; 
import { styles } from "../style";
import { experiences } from "../cosnstants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { expression } from "three/examples/jsm/nodes/Nodes.js";

// this maps through all the experiance from the const colder and sets them on the timeline with their points and date and icons
const ExperienceCard = ({experience})=>(
<VerticalTimelineElement
contentStyle={{background: '#1d1836', color: '#fff'}}
contentArrowStyle={{borderRight: '7px solid  #1d1836'}}
date={experience.date}
iconStyle={{background: experience.iconBG}}
icon= {
  <div className='flex justify-cent items-center w-full h-full'>
  <img src={experience.icon}
  alt={experience.company_name} 
  className='w-60% h-60% object-container'/>
  </div>
}
>
<div>
  <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
  <p className='text-secondary text-[16px] font-semibold' style={{margin: 0}}>{experience.company_name}</p>
</div>
<ul className='mt-5 ml-5 list-disc space-y-2'>
  {experience.points.map((point,index)=>(
    <li
    key={`experience-point-${index}`}
    className='text-white-100 text-[14px]  pl-1 tracking-wider'
    >{point}</li>
  ))}
</ul>
</VerticalTimelineElement>
)
// sets the main body experience on the timeline 
const Experience = () => {
  return (
    <>
    <motion.div
    variants={textVariant()}
    >
      <p  className={styles.sectionSubText}>What I've done</p>
      <h2 className={styles.sectionHeadText}>The Work.</h2>
    </motion.div>
    <div className='mt-20 flex flex-col'>
      <VerticalTimeline>
        {experiences.map((experience, index)=>(

          <ExperienceCard key={index}
          experience={experience}
          />
        ))}
      </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')