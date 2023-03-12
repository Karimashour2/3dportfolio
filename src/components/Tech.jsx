import React from 'react';
import { motion } from 'framer-motion';
import { textVariant } from "../utils/motion";
import { styles } from '../style';
import { BallCanvas } from './canvas';
import { technologies } from '../constants';
import ComponentsWrapper from '../hoc/ComponentsWrapper';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Skills</p>
        <h2 className={`${styles.sectionHeadText}`}>Techs.</h2>
      </motion.div>
      <div className='my-10 flex flex-row flex-wrap justify-center gap-10 md:grid md:grid-cols-5 '> 
        {technologies.map((tech)=>
          <div className='w-28 h-28' key={tech.name}>
            <BallCanvas icon={tech.icon}/> 
          </div>
        )}
      </div>
    </>
  )
}

export default ComponentsWrapper(Tech , 'tech');