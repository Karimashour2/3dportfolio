import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { experiences } from "../constants";
import { ComponentsWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What I Have Done So Far</p>
        <h2 className={`${styles.sectionHeadText}`}>Work Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((exp) => (
            <VerticalTimelineElement
              key={exp.title}
              contentStyle={{ background: "#1d1836", color: "#fff",}}
              contentArrowStyle={{ borderRight: "7px solid #232631" }}
              date={exp.date}
              iconStyle={{ background: exp.iconBg }}
              icon={
                <div>
                  <img src={exp.icon} alt={exp.company_name} />
                </div>
              }
            >
              <div>
                <h3 className="text-[24px] font-bold">{exp.title}</h3>
                <p className="text-secondary text-[16px] font-semibold" style={{margin: 0}}>{exp.company_name}</p>
                <ul className="mt-5 list-disc ml-5 space-y-2">
                {exp.points.map((point,i)=>
                  <li key={i} className='text-white-100 text-[14px] pl-1 tracking-wider'>{point}</li>
                )}
                </ul>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default ComponentsWrapper(Experience, "experience");
