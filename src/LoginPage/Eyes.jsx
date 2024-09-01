import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";


function Eyes(){

    const [rotate, setRotate] = useState(0);
    const [transformX, setTransformX] = useState(0)
    const [transformY, setTransformY] = useState(0)
    useEffect(()=>{
        window.addEventListener('mousemove', (e)=>{
            var mouseX = e.clientX
            let mouseY = e.clientY
            
            let deltaX = mouseX - window.innerWidth/2
            let deltaY = mouseY - window.innerHeight/2
            var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
            setRotate(angle - 180)
            setTransformX(deltaX/30)
            setTransformY(deltaY/30)
        })
    })

    const fadeInUpAnimation = {
        hidden: {
          opacity: 0,
          y: 100,
        },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            staggerChildren: 0.3,
            duration: 1.5,
          },
        },
      };

    return(

        <div className="eyes grid place-items-center w-full h-screen overflow-hidden">
            <div data-scroll data-section data-scroll-speed="-.4" className="relative w-full h-full bg-cover bg-center bg-[#ced4da]">
                
                <motion.div data-scroll data-section data-scroll-speed=".1" 
                initial="hidden"
                animate="show"
                variants={fadeInUpAnimation}
                className="w-full h-full p-20 flex flex-col items-center justify-center">
                    <motion.p variants={fadeInUpAnimation}>Welcome to Courseify</motion.p>
                    <h1 className="uppercase text-9xl font-[1000] text-center">Empower</h1>
                    <h1 className="uppercase text-9xl font-[1000] text-center">Your Learning</h1>
                    <h1 className="uppercase text-9xl font-[1000] text-center">Journey</h1>  
                    <motion.p variants={fadeInUpAnimation}>Join Us and Transform Your Future</motion.p>
                </motion.div>

                <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10">
                    <div className="w-[13vw] h-[13vw] flex items-center justify-center rounded-full bg-zinc-100">
                    <div style={{transform: `translateX(${transformX}%) translateY(${transformY}%)`}} className="relative w-3/5 h-3/5 rounded-full bg-zinc-900">
                            <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 ">
                                <div className="w-5 h-5 rounded-full bg-zinc-100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[13vw] h-[13vw] flex items-center justify-center rounded-full bg-zinc-100">
                    <div style={{transform: `translateX(${transformX}%) translateY(${transformY}%)`}} className="relative w-3/5 h-3/5 rounded-full bg-zinc-900">
                            <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 ">
                                <div className="w-5 h-5 rounded-full bg-zinc-100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Eyes;