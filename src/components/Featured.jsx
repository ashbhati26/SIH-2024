import { motion, useAnimation } from "framer-motion";
import React from "react";
import fea01 from "../assets/fea01.png"
import fea02 from "../assets/fea02.png"

function Featured() {
    const cards = [useAnimation(), useAnimation()];

    const handleHover = (index) => {
        cards[index].start({ y: "0%" });
    };

    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" });
    };

    return (
        <div className="w-full py-20 data-scroll data-scroll-section data-scroll-speed='.2' ">
            <div className="w-full px-10 border-b-[1px] border-zinc-700 pb-20"></div>
            <div className="px-20">
                <div className="cards w-full flex gap-10 mt-10">
                    <motion.div
                        onHoverStart={() => handleHover(0)}
                        onHoverEnd={() => handleHoverEnd(0)}
                        className="cardcontainer relative w-1/2 h-[80vh]"
                    >
                        <h1 className="absolute flex overflow-hidden left-full -translate-x-[50%] top-1/2 -translate-y-[50%] font-bold leading-none tracking-tight text-8xl z-10">
                            {"WITH-US".split('').map((item, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ y: "100%" }}
                                    animate={cards[0]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                                    className="inline-block"
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </h1>
                        <div className="card w-full h-full rounded-xl overflow-hidden bg-[#cccccd]">
                            <img
                                className="w-full h-full bg-cover"
                                src={fea01}
                                alt=""
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        onHoverStart={() => handleHover(1)}
                        onHoverEnd={() => handleHoverEnd(1)}
                        className="cardcontainer relative w-1/2 h-[80vh] rounded-xl"
                    >
                        <h1 className="absolute flex overflow-hidden right-full translate-x-[50%] top-1/2 -translate-y-[50%] font-bold leading-none tracking-tight text-8xl z-10">
                            {"WITHOUT-US".split('').map((item, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ y: "100%" }}
                                    animate={cards[1]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                                    className="inline-block"
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </h1>
                        <div className="card w-full h-full rounded-xl overflow-hidden">
                            <img
                                className="w-full h-full bg-cover bg-[#343a40]"
                                src={fea02}
                                alt=""
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Featured;