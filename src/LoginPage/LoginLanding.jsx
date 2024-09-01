import React from "react";
import LoginPage from "./LoginPage";
import Eyes from "./Eyes";
import LocomotiveScroll from 'locomotive-scroll';

function LoginLanding(){

    const locomotiveScroll = new LocomotiveScroll();

    return(
        <div className="w-full min-h-screen bg-[#fff] text-[#050206] font-['Gilroy']">
            <Eyes />
            <LoginPage />
        </div>
    )
}

export default LoginLanding;