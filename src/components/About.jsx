import React, { useRef, useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { IoIosArrowRoundForward } from 'react-icons/io';
import LocomotiveScroll from 'locomotive-scroll';

import intro from '../assets/intro.mp4';

function About() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    const handleVideoEnd = () => {
      video.play(); 
    };

    if (video) {
      video.addEventListener('ended', handleVideoEnd);
    }

    return () => {
      if (video) {
        video.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, []);

  const handleReadMoreClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div ref={scrollRef} data-scroll-section data-scroll data-scroll-speed=".4" className="w-full py-20 rounded-t-3xl bg-[#1c1d20] text-white z-20">
      
      <div className='marquee flex overflow-hidden whitespace-nowrap'>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className='text-[16vw] leading-none font-extrabold pr-10'>We are courseify
        </motion.h1>

        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className='text-[16vw] leading-none font-extrabold pr-10'>We are courseify
        </motion.h1>
      </div>

      <div className="px-10" >
        <h1 className="text-[4vw] mt-10 leading-[3.5vw] tracking-tight">Unlock a dynamic learning experience with AI-driven, expert-led content. Our platform offers personalized paths, real-time feedback, and collaboration, ensuring learners reach their full potential.</h1>
        <div className="w-full border-t-[2px] pt-10 mt-[5vw] border-[#a0a0a2] flex">
          <div className="w-1/2">
            <h1 className="text-6xl tracking-tight">Our approach</h1>
            <button
              className="h-[5vw] w-[15vw] flex gap-10 justify-center items-center bg-[#1b4965] mt-10 rounded-full text-[#fff] group"
              onClick={handleReadMoreClick}
            >
              <span className="relative font-regular z-10 text-xl">
                {isPlaying ? "Pause" : "Play"}
              </span>
              <div className="w-2 h-2 rounded-full bg-[#fff] transition-all duration-300 ease-in-out group-hover:w-8 group-hover:h-8 flex justify-center items-center">
                <div className="text-[2vw] text-[#000] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out -rotate-45">
                  <IoIosArrowRoundForward />
                </div>
              </div>
            </button>
          </div>
          <div className="w-1/2 h-[70vh] rounded-3xl">
            <video 
              ref={videoRef}
              className="w-full h-full rounded-3xl object-cover"
              src={intro}
              controls={false}
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
