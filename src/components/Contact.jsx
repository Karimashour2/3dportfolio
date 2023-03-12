import React from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { ComponentsWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import Tilt from "react-tilt";
import { contacts } from "../constants";

const Contact = () => {
  return (
    <div className="flex-col flex gap-10 over-flow-hidden w-full">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
      </motion.div>
      <div className="flex flex-col items-center md:flex-row-reverse md:justify-between md:items-start md:flex-nowrap w-full">
        <div
          className="flex justify-center w-[100%] md:w-[50%] sm:h-[400px] lg:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </div>
        <div className="flex flex-col gap-5 w-[100%] md:w-[50%]">
          {contacts.map((con, i) => (
            <motion.div
              variants={slideIn("left", "tween", 0.6, 1)}
              key={`contact-${i}`}
            >
              <Tilt
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className="w-[100%] md:w-[85%]  h-[60px] green-pink-gradient p-[1px] rounded-[20px] shadow-card"
              >
                <div className="bg-tertiary rounded-[20px] min-h-[60px] flex items-center">
                  <img
                    className="w-[50px] h-[50px] px-[5px] object-contain"
                    src={con.icon}
                    alt={con.contact}
                  />
                  <p className="truncate text-secondary text-[14px] px-[10px]">
                    <a target="_blank" href={con.contact}>
                      {con.contact}
                    </a>
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default ComponentsWrapper(Contact, "contact");
