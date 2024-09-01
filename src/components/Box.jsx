import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import Button from "./Button";

function Box() {
    return (
        <div className='w-full'>
            <div className='max-w-screen-lg mx-auto py-20 flex gap-2 text-white'>
                <div className='w-1/3 bg-[#202124] p-5 rounded-xl hover:bg-[#303135] min-h-[70vh] flex flex-col justify-between relative'>
                    <div className='w-full'>
                        <div className='w-full flex justify-between items-center'>
                            <h3>Make an impact</h3>
                            <IoIosArrowRoundForward />
                        </div>
                        <h1 className='text-3xl font-medium mt-5'>
                            Help Us Improve! Share Your Thoughts in Our Quick Feedback Form.
                        </h1>
                    </div>
                    <div className='absolute bottom-5 left-5'>
                        <Button name="Give Feedback" link="#" textColor='#fff' borderColor='#fff'/>
                    </div>
                </div>

                <div className='w-2/3 bg-[#202124] p-5 rounded-xl hover:bg-[#303135] min-h-[70vh] flex flex-col justify-between relative'>
                    <div className='w-full'>
                        <div className='w-full flex justify-between items-center'>
                            <h3>Let's Connect</h3>
                            <IoIosArrowRoundForward />
                        </div>
                        <h1 className='text-3xl font-medium mt-5'>
                            Be Part of Our Telegram Group for Instant Updates and Discussions.
                        </h1>
                    </div>
                    <div className='absolute bottom-5 left-5'>
                        <Button name="Join Now" link="#" textColor='#fff' borderColor='#fff'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Box;
