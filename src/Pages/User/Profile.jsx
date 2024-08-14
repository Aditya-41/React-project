import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeLayout from "../../Layouts/HomeLayout";

import { Link } from "react-router-dom";
import { getUserData } from "../../Redux/Slices/AuthSlice";

function Profile(){

    const dispatch = useDispatch();
    const userData = useSelector((state) => state?.auth?.data);
    
    
    console.log(userData);

    
    
    return (
        <HomeLayout>
            <div className="min-h-[90vh] flex items-center justify-center">
                <div className="my-10 flex flex-col gap-4 rounded-md p-4 text-white  w-96 shadow-[0_0_10px_black]">
                    <img 
                        src={userData?.avatar?.secure_url}
                        alt="" 
                        className="w-40 m-auto rounded-full border border-black "
                        />

                    <h3 className="text-xl font-bold text-center capitalize">
                        {userData?.fullName}
                    </h3>
                    <div className="grid grid-cols-2 ">
                        <p className="font-semibold"> Email :</p> 
                        <p className="font-semibold">{userData?.email}</p>
                       
                        <p className="font-semibold">Role :</p>
                        <p className="font-semibold">{userData?.role}</p>
                       
                        <p className="font-semibold"> Subscription :</p>
                        <p className="font-semibold">{userData?.subscription?.status ==="active " ? "Active" : "Inactive"}</p>
                        
                    </div>
                    <div className="flex items-center justify-between gap-2">
                        <Link 
                            to="/changepassword" 
                            className="w-1/2 bg-yellow-600 hover:bg-yellow-500 transition-all  duration-300 rounded-sm font-semibold py-2 cursor-pointer text-center">
                            <button>
                                Change Password
                            </button>
                        </Link>
                        <Link 
                            to="/user/editprofile" 
                            className="w-1/2 bg-yellow-600 hover:bg-yellow-500 transition-all  duration-300 rounded-sm font-semibold py-2 cursor-pointer text-center">
                            <button>
                                Edit Profile
                            </button>
                        </Link>
                    </div>
                    {userData?.subscription?.status ==="active" && (
                        <button className="w-full bg-red-600 hover:bg-red-500 transition-all  duration-300 rounded-sm font-semibold py-2 cursor-pointer text-center">
                            Cancel Subscription
                        </button>
                    )}
                </div>

            </div>
        </HomeLayout>
    )
}

export default Profile