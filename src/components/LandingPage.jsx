import { motion } from 'framer-motion';
import React from 'react';
import hello from '../assets/hello.jpg';

function LandingPage(){

    return (
        <div className='w-full data-scroll'>
            <div className='textstructure mt-[4vw] px-[4vw] z-2'>
                {["Experience", "the Pinnacle", "of Learning"].map((item, index) =>{
                    return (
                        <div className='masker'>
                            <div className='w-full flex items-center'>
                                {index === 1 && (
                                    <motion.div
                                    initial={{width: 0}} 
                                    animate={{width: "8vw"}} 
                                    transition={{ease: [0.76, 0, 0.24, 1], duration: 1, delay: 1}} 
                                    className='w-[8vw] h-[5vw] px-1 rounded-md'>
                                        <img className='w-full h-full object-cover rounded-md ' src={hello} alt="" />
                                    </motion.div>
                                )}
                                <h1 className='text-7xl -leading-[5.5vw] tracking-tight font-semibold uppercase'>
                                    {item}
                                </h1>
                            </div>
                        </div>
                    )})}
            </div>

            <div className='border-t-[1px] border-zinc-700 mt-[9vw] flex justify-between item-center px-[4vw] py-[4vw]'>
                {["Unlock Your Full Potential", "Learn. Grow. Succeed", "Tailored Learning for Every Mind"].map((item,index) => 
                <p className='text-md font-light tracking-tight leading-none'>{item}</p>
                )}
            </div>
        </div>
    )
}
export default LandingPage;