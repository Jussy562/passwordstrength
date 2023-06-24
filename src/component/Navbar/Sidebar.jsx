import React from 'react'
import { HiUserGroup } from 'react-icons/hi';
import { FaSmile,  } from 'react-icons/fa';

function AdminNavbar({
    handleWeakPassword,
    handleModeratePassword,
    handleStrongPassword,
    handleVeryStrongPassword,
    handleAllPassword,
    user,
    onLogout}) {
    const name = user?.name.toUpperCase();
  return (
    <div className='w-full md:w-1/3 md:fixed top-0 left-0  flex flex-col justify-between pt-8 pb-10 px-6 md:px-8   bg-[#13213C] h-auto md:h-full'>
            <div className='flex flex-col  w-auto h-auto'>
                <div className='flex flex-row justify-start mb-16'>
                    <button onClick={onLogout}  className="text-white bg-[#3296ee] hover:bg-[#0f67da] hover:border-[#0f67da]  focus:outline-none font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout</button>
                    
                </div>
                <div className='mb-5'>
                    <h1 className='text-gray-300 text-3xl'>Hello, <span className='text-white font-bold'>{name}</span></h1>
                </div>
                <p className='text-gray-300 mb-4 text-sm'>Welcome to your dashboard, kindly sort through the user and password</p>
                
                

                <div className='flex flex-col mt-12'>
                    <p className='text-lg font-bold text-gray-400'>
                        View Based On
                    </p>

                    <div className='w-full flex flex-row flex-wrap  md:flex-nowrap items-center justify-center mt-4 gap-7 md:gap-4'>
                        <div 
                        
                        className='flex flex-col justify-center items-center'>
                            <button 
                            onClick={handleWeakPassword}
                            className='bg-[#ffa803] flex items-center justify-center 
                            hover:border-none py-2 px-3 rounded-2xl mb-3 border-none'>
                                <FaSmile className='text-2xl w-4 font-bold text-white' />
                            </button>
                            <p className='text-gray-400'>Weak</p>
                        </div>

                        <div 
                       
                        className='flex flex-col justify-center items-center'>
                            <button 
                            onClick={handleModeratePassword}
                            className='bg-[#fff003] flex items-center justify-center 
                            border-none  hover:border-none py-2 px-3 rounded-2xl mb-3'>
                                <FaSmile className='text-2xl w-4 font-extrabold text-white' />
                            </button>
                            <p className='text-gray-400'>Mod. </p>
                        </div>

                        <div 
                        
                        className='flex flex-col justify-center items-center'>
                            <button
                            onClick={handleStrongPassword}
                            className='bg-[#b6ff03] flex items-center justify-center 
                            border-none hover:border-none py-2 px-3 rounded-2xl mb-3'>
                                <FaSmile className='text-2xl w-4 font-bold text-white' />
                            </button>
                            <p className='text-gray-400'>Strong</p>
                        </div>
                        <div 
                        
                        className='flex flex-col justify-center items-center'>
                            <button
                            onClick={handleVeryStrongPassword}
                            className='bg-[#04c200] flex items-center justify-center 
                            border-none hover:border-none py-2 px-3 rounded-2xl mb-3'>
                                <FaSmile className='text-2xl w-4 font-bold text-white' />
                            </button>
                            <p className='text-gray-400'>Strong+</p>
                        </div>

                        <div 
                        
                        className='flex flex-col justify-center items-center'>
                            <button
                            onClick={handleAllPassword}
                            className='bg-[#228ef4] flex items-center justify-center 
                            border-none hover:border-none py-2 px-3 rounded-2xl mb-3'>
                                <FaSmile className='text-2xl w-4 font-bold text-white' />
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