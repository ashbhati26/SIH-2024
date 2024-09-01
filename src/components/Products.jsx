import React, { useState } from 'react';
import Product from "./Product";
import { motion } from 'framer-motion';
import video01 from '../assets/01.mp4';
import video02 from '../assets/02.mp4';
import video03 from '../assets/03.mp4';
import video04 from '../assets/04.mp4';
import video05 from '../assets/05.mp4';
import video06 from '../assets/06.mp4';

function Products(){

    const products=[
        {title: '01', description: "Courseify helps to track facilities simplifies management with real-time updates and smart scheduling. It keeps resources organized, ensures timely maintenance, and saves money, all while adding a touch of modern efficiency to your operations.", live: true, case: false},
        {title: '02', description: "Well, coursify boosts accessibility by allowing learners to access materials anytime, anywhere, well it even offers a user-friendly platform for seamless learning, supports diverse needs with adaptive features, and makes education more inclusive, stylishly breaking down barriers to knowledge.", live: true, case: false},
        {title: '03', description: "A centralized learning platform via an coursify brings everything together in one spot. It simplifies access to courses, tracks progress effortlessly, and streamlines communication, making learning sleek, organized, and efficient—all while keeping everyone on the same page.", live: true, case: false},
        {title: '04', description: "Interactive learning through a coursify makes education engaging and fun. It offers dynamic activities, instant feedback, and collaborative tools that boost participation and understanding, turning learning into an interactive adventure where every click leads to discovery and growth.", live: true, case: false},
        {title: '05', description: "Automated administrative tasks with Coursify streamline workflows, saving time and reducing errors. It handles routine jobs like grading and reporting effortlessly, letting educators focus on teaching while ensuring everything runs smoothly and efficiently behind the scenes.", live: true, case: false},
        {title: '06', description: "Coursify platforms often include features for discussion forums, chats, and messaging, which can foster collaboration among learners and instructors.", live: true, case: false},
    ];

    const [pos, setPos] = useState(0);

    const mover = (val) => {
        setPos(val * 20);
    }

    return(
        <div data-scroll data-scroll-section data-scroll-speed="-.2" className='relative z-10'>
            {products.map((product, index) => (
                <Product key={index} title={product.title} description={product.description} mover={mover} count={index}/>
            ))}

            <div className='absolute top-0 w-full h-full pointer-events-none'>
                <motion.div 
                    initial={{ y: pos, x: "-50%" }}
                    animate={{ y: `${pos}rem` }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
                    className='window rounded-xl absolute w-96 h-[20rem] bg-white left-[44%] overflow-hidden'
                >
                    {[video01, video02, video03, video04, video05, video06].map((video, idx) => (
                        <motion.div 
                            key={idx}
                            animate={{ y: `${-pos}rem` }} 
                            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                            className='w-full h-full'
                        >
                            <video 
                                className='w-full h-full object-cover' 
                                autoPlay loop muted playsInline 
                                src={video}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default Products;
