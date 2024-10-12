import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const navigate = useNavigate();

    const validatePassword = (password) => {
        if (password.length < 6) {
            setPasswordError("6 min length character");
            return false;
        } else {
            setPasswordError("");
            return true;
        }
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError("Invalid email format");
            return false;
        } else {
            setEmailError("");
            return true;
        }
    };

    const handleLogin = (event) => {
        event.preventDefault();
        if (validateEmail(email) && validatePassword(password)) {
            console.log("Login Success", email, password);
            navigate("/menu");
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                },
            });
            Swal.fire({
                text: "Welocome To Warung Makan Bahari",
                title: "Have fun!",
                icon: "success",
            });
        } else {
            Swal.fire({
                text: "Incorrect login username or password",
                icon: "error",
            });
        }
    };

    return (
        <div>
            <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
                <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                    <h1 className="font-bold text-center text-2xl mb-5">
                        Warung Makan Bahari
                    </h1>
                    <form onSubmit={handleLogin}>
                        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                            <div className="px-5 py-7">
                                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                                    E-mail
                                </label>
                                <input
                                    type="text"
                                    className="border rounded-lg px-3 py-2 mt-1 mb-1 text-sm w-full"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />
                                {emailError && (
                                    <p className="text-red-500 text-sm mb-5">
                                        {emailError}
                                    </p>
                                )}
                                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                                    Password
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    className="border rounded-lg px-3 py-2 mt-1 mb-1 text-sm w-full"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                />
                                {passwordError && (
                                    <p className="text-red-500 text-sm mb-5">
                                        {passwordError}
                                    </p>
                                )}

                                <button
                                    className={`transition duration-200 bg-blue-500 mt-4 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block cursor-pointer

                                    }`}
                                >
                                    <span className="inline-block mr-2">
                                        Login
                                    </span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="w-4 h-4 inline-block"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
