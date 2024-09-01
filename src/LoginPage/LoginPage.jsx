import React, { useState } from "react";
import Cover from "../assets/cover.png"

function LoginPage() {
    const [isSliding, setIsSliding] = useState(false);

    const handleSignInClick = () => {
        setIsSliding(true);
    };

    const handleSignUpClick = () => {
        setIsSliding(false);
    };

    return (
        <div className="flex flex-col h-screen w-full bg-[#1c1d20]">
            <div className="flex-grow flex justify-center items-center">
                <div className="h-[75%] w-[65%] shadow-xl rounded-2xl flex overflow-hidden relative">
                    <div className={`h-full w-[50%] bg-slate-50 p-6`}>
                        <h1 className="text-3xl font-semibold mb-4">Welcome Back!</h1>
                        <p className="mb-6">
                            Not a member?{" "}
                            <span onClick={handleSignInClick} className="text-[#1b4965] cursor-pointer">
                                Register Now
                            </span>
                        </p>
                        <form>
                            <div className="mb-4">
                                <input
                                    id="username"
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#343a40]"
                                    placeholder="Username"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    id="password"
                                    type="password"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#343a40]"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="mb-4">
                                <button
                                    type="submit"
                                    className="w-full bg-[#343a40] text-white py-2 rounded-full hover:bg-[#212529]"
                                >
                                    Login
                                </button>
                            </div>
                            <div className="text-center">
                                <a href="#" className="text-sm text-[#1b4965] hover:underline">
                                    Forgot Password?
                                </a>
                            </div>
                        </form>
                    </div>

                    <div
                        className={`h-full w-[50%] p-3 bg-slate-50 transform transition-transform duration-1000 ease-in-out ${
                            isSliding ? "-translate-x-full" : "translate-x-0"
                        }`}
                    >
                        <div className="bg-[#edc4b3] h-full w-full rounded-xl">
                            <img className="w-full h-full object-cover" src={Cover} alt="" />
                        </div>
                    </div>

                    <div
                        className={`absolute top-0 right-0 h-full w-[50%] bg-slate-50 p-4 transition-opacity duration-1000 ease-in-out overflow-y-auto ${
                            isSliding ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                    >
                        <h1 className="text-3xl font-semibold mb-4">Register Now</h1>
                        <p className="mb-6">
                            Do you have an account?{" "}
                            <span onClick={handleSignUpClick} className="text-[#1b4965] cursor-pointer">
                                Sign In
                            </span>
                        </p>
                        <form>
                            <div className="mb-3">
                                <input
                                    id="name"
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#343a40]"
                                    placeholder="Full Name"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    id="phone"
                                    type="tel"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#343a40]"
                                    placeholder="Phone Number"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    id="email"
                                    type="email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#343a40]"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="mb-3">
                                <select
                                    id="role"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#343a40]"
                                >
                                    <option value="student">Role</option>
                                    <option value="student">Student</option>
                                    <option value="teacher">Teacher</option>
                                </select>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#343a40] text-white py-2 rounded-full hover:bg-[#212529]"
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <footer className="flex justify-center items-center p-4 bg-[#1c1d20] text-[#6c757d] text-xs">
                <h4>© Made by Code Verse</h4>
            </footer>
        </div>
    );
}

export default LoginPage;
