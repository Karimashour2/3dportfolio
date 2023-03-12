import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import ComputersCanvasXS from "./canvas/ComputersXS";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 sm:top-[70px] top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Karim</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm Front-End Web Developer
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <ComputersCanvasXS/>
      <div className={`${styles.paddingX} absolute xs:bottom-5 bottom-5 w-full flex  items-center justify-center sm:justify-start`}>
        <a href='#about'>
          <div className="w-[30px] h-[55px] border-[3px] border-secondary rounded-3xl">
            <motion.div
              className="w-3 h-3 rounded-full bg-secondary mx-auto p-2 mt-1"
              animate={{
                y: [0,26,0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
