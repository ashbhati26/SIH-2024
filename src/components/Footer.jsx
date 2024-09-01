import React from 'react';
import LocomotiveScroll from 'locomotive-scroll';

function Footer() {
    const locomotiveScroll = new LocomotiveScroll();

    return (
        <div className='w-full h-screen flex gap-5 p-10 bg-[#1c1d20] text-white'>
            <div className='w-1/2 h-full flex flex-col justify-between'>
                <div className='heading'>
                    <h1 className='text-[6vw] font-bold leading-none tracking-tight'>learn-anytime</h1>
                    <h1 className='text-[6vw] font-bold leading-none tracking-tight'>anywhere</h1>
                </div>
                <h4 className='text-xs text-[#6c757d]'>© Made by Code Verse</h4>
            </div>
            <div className='w-1/2 h-full flex flex-col justify-between items-end'>
                <div className='heading'>
                    <h1 className='text-[4vw] font-regular leading-none tracking-tight'>with <span className='font-["Playfair_Display"] uppercase text-[6vw] font-bold tracking-wider'>Courseify</span></h1>
                </div>
                <div className='flex flex-col items-end gap-2'>
                    <a href='#' rel='' 
                    className='text-xl relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full'>
                        Facebook
                    </a>
                    <a href='#' rel='' 
                    className='text-xl relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full'>
                        Twitter
                    </a>
                    <a href='#' rel='' 
                    className='text-xl relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full'>
                        Instagram
                    </a>
                    <a href='#' rel='' 
                    className='text-xl relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full'>
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
