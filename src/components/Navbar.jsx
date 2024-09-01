import React from 'react';
import Button from './Button';

function NavBar() {
    return (
        <div className='mx-[4vw] py-[1vw] flex flex-col md:flex-row items-center justify-between border-b-[1px] border-zinc-700'>
            <div className='flex items-center gap-8 md:gap-14 ml-5 md:mb-0'>
                <h2 className='font-["Playfair_Display"] uppercase text-2xl md:text-3xl font-bold tracking-wider'>
                    Courseify
                </h2>
            </div>
            <Button name="Get Started" link="/login" textColor='#1b4965' borderColor='#1b4965' /> {/* Link to "/login" */}
        </div>
    );
}

export default NavBar;
