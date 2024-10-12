import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const logout = () => {
        Swal.fire({
            text: "Are you sure you want to logout?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, logout!",
        }).then((result) => {
            if (result.isConfirmed) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    },
                });
                Toast.fire({
                    icon: "success",
                    title: "success logout",
                }).then(() => {
                    navigate("/");
                });
            }
        });
    };

    return (
        <div>
            <div className="border-b-2 shadow-md border-gray-100 pb-2 pt-2 ">
                <div className="max-w-7xl mx-auto pt-8 px-4 sm:px-6 mb-10 ">
                    <div className="flex flex-col-reverse md:flex-row min-w-full  justify-center md:justify-between  md:space-x-10">
                        <a className="flex-1 md:self-start" href="#">
                            <div className="flex justify-center ">
                                <div className="flex justify-center items-center">
                                    <span className=" pt-1 mx-3 whitespace-nowrap text-4xl italic font-bold text-blue-900">
                                        Warung Makan Bahari
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <nav id="bar" className="flex justify-center ">
                    <div className=" flex flex-col md:flex-row justify-center md:space-y-0 my-4 space-y-4  text-center text-gray-500">
                        <Link
                            className={` mx-8  ${
                                location.pathname === "/menu"
                                    ? "bg-blue-900 text-white"
                                    : ""
                            }  hover:bg-blue-700 bg-blue-600 text-white py-2 px-10 rounded-sm`}
                            to={"/menu"}
                        >
                            Food
                        </Link>
                        <Link
                            className={` mx-8  ${
                                location.pathname === "/table"
                                    ? "bg-blue-900 text-white"
                                    : ""
                            }  hover:bg-blue-700 bg-blue-600 py-2 px-10 text-white rounded-sm `}
                            to={"/table"}
                        >
                            Table
                        </Link>

                        <button
                            className="mx-8 text-white hover:bg-blue-700 bg-blue-600 py-2 px-10 rounded-sm"
                            onClick={logout}
                        >
                            Logout
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    );
};
