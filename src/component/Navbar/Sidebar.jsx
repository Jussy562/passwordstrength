import React from 'react'
import { HiUserGroup } from 'react-icons/hi';
import { FaSmile,  } from 'react-icons/fa';

function AdminNavbar({
    handleWeakPassword,
    handleModeratePassword,
    handleStrongPassword,
    handleVeryStrongPassword,
    handleAllPassword,
    onLogout}) {
  return (
    <div className='w-full  flex flex-col justify-between pt-8 pb-10 px-6 md:px-8   bg-[#13213C] h-full'>
            <div className=' flex flex-col  w-auto h-full'>
                <div className='flex flex-row justify-start mb-16'>
                    <button onClick={onLogout}  className="text-white bg-[#3296ee] hover:bg-[#0f67da] hover:border-[#0f67da]  focus:outline-none font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout</button>
                    {/* <Link to="/dashboard"><button type="submit" className="text-white bg-[#3296ee] hover:bg-[#0f67da] hover:border-[#0f67da]  focus:outline-none font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button></Link> */}
                </div>
                <div className='mb-5'>
                    <h1 className='text-gray-300 text-3xl'>Hello, <span className='text-white font-bold'>EMERALD</span></h1>
                </div>
                <p className='text-gray-300 mb-4 text-sm'>Welcome to your dashboard, kindly sort through the user and password</p>
                
                

                <div className='flex flex-col mt-12'>
                    <p className='text-xl font-bold text-gray-400'>
                        Based On Password Strength
                    </p>

                    <div className='w-full flex flex-col md:flex-row flex-wrap items-center md:justify-between mt-4 gap-4'>
                        <div 
                        
                        className='text-center'>
                            <button 
                            onClick={handleWeakPassword}
                            className='bg-[#ffa803] flex items-center justify-center 
                            hover:border-none py-3 px-4 rounded-2xl mb-3 border-none'>
                                <FaSmile className='text-4xl w-5 font-bold text-white' />
                            </button>
                            <p className='text-gray-400'>Weak</p>
                        </div>

                        <div 
                       
                        className='text-center'>
                            <button 
                            onClick={handleModeratePassword}
                            className='bg-[#fff003] flex items-center justify-center 
                            border-none  hover:border-none py-3 px-4 rounded-2xl mb-3'>
                                <FaSmile className='text-4xl w-5 font-extrabold text-white' />
                            </button>
                            <p className='text-gray-400'>Mod. </p>
                        </div>

                        <div 
                        
                        className='text-center'>
                            <button
                            onClick={handleStrongPassword}
                            className='bg-[#b6ff03] flex items-center justify-center 
                            border-none hover:border-none py-3 px-4 rounded-2xl mb-3'>
                                <FaSmile className='text-4xl w-5 font-bold text-white' />
                            </button>
                            <p className='text-gray-400'>Strong</p>
                        </div>
                        <div 
                        
                        className='text-center'>
                            <button
                            onClick={handleVeryStrongPassword}
                            className='bg-[#04c200] flex items-center justify-center 
                            border-none hover:border-none py-3 px-4 rounded-2xl mb-3'>
                                <FaSmile className='text-4xl w-5 font-bold text-white' />
                            </button>
                            <p className='text-gray-400'>Strong+</p>
                        </div>

                        <div 
                        
                        className='text-center'>
                            <button
                            onClick={handleAllPassword}
                            className='bg-[#228ef4] flex items-center justify-center 
                            border-none hover:border-none py-3 px-4 rounded-2xl mb-3'>
                                <FaSmile className='text-4xl w-5 font-bold text-white' />
                            </button>
                            <p className='text-gray-400'>All</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
  )
}

export default AdminNavbar