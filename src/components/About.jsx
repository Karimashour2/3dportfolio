import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { ComponentsWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={` mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]`}
      >
        I'm skilled Front-End Web Developer with experience in JavaScript and
        TypeScript, and expertise in ReactJS framework also build many
        responsive web applications and user interfaces. I'm a quick learner and
        cooperative person. I'm passionate about learning new tools and
        technologies. My goal to be a better developer. Let's work together
        bring vision into reality.
      </motion.p>
      <div className="mt-10 flex flex-wrap gap-20 justify-center">
        {services.map((service, index) => (
          <Tilt key={index} className="max-w-[250px] w-full">
            <motion.div
              variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
              className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
              <div
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className="bg-tertiary rounded-[20px] py-5 min-h-[280px] flex flex-col justify-evenly items-center"
              >
                <img
                  className="w-[80px] h-[80px]"
                  src={service.icon}
                  alt={service.title}
                />
                <h3 className="text-[20px] font-bold">{service.title}</h3>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </>
  );
};

export default ComponentsWrapper(About, 'about');
