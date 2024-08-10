import { Link } from 'react-router-dom';

import HomePageImage from "../Assets/Images/homePageMainImage.png";
import HomeLayout from '../Layouts/HomeLayout';
function HomePage() {
    const element = <div className='pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]'>
                    <div className='w-1/2 space-y-6'>
                        <h1 className='text-5xl font-semibold'>
                            Find Out Best
                            <span className='text-yellow-500 font-bold'>
                                Online Courses
                            </span>
                        </h1>
                        <p className='text-xl text-gray-200'>
                            We have a large library of Courses taught by Highly Skilled and Qualified Faculties at affordable Costs 
                        </p>

                        <div className="space-x-6">
                            <Link to="/courses">
                                <button className='bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300'>
                                    Explore Courses
                                </button>
                            </Link>
                            <Link to="/contact">
                                <button className='border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300'>
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='w-1/2 flex items-center justify-center'>
                        <img src={HomePageImage} alt="homepage image" />
                    </div>
                </div>

    return (
        <HomeLayout childern={element}/>       
    )
}

export default HomePage;