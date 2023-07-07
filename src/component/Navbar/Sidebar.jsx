import React, { useEffect, useState } from 'react'
// import { HiUserGroup } from 'react-icons/hi';
import { FaSmile, FaUserCircle,  } from 'react-icons/fa';
import UpdatePassword from '../../pages/admin/UpdatePassword';

function AdminNavbar({
    handleWeakPassword,
    handleModeratePassword,
    handleStrongPassword,
    handleVeryStrongPassword,
    handleAllPassword,
    user,
    onUpdateUserData,
    onLogout}) {
    const name = user?.userName.toUpperCase();
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const toggleModal = () => {
      setShowUpdateModal(!showUpdateModal);
    };
    const [selectedItem, setSelectedItem] = useState({});
  
    
    useEffect(() => {
      if (showUpdateModal && selectedItem) {
        update.showModal(selectedItem);
      } else {
        update.close();
        
      }
    }, [showUpdateModal, selectedItem]);
    const handleModal = (item) => {
      console.log('item:', item);
      toggleModal();
      setSelectedItem(item);
      
      
    }

    const handleUpdatePassword = (data) => {
        console.log(data);
        // Retrieve passwordList from local storage
      const passwordList = JSON.parse(localStorage.getItem('passwordList'));
         // Update the specific object in passwordList
      const updatedPasswordList = passwordList.map((user) => {
        if (user.userName === data.userName && user.name === data.name) {
          // Update the specific properties in the object
          return {
            ...user,
            password: data.password,
            confirmPassword: data.confirmPassword,
            strength: data.strength,
            signupTime: data.signupTime
          };
        } else {
          return user;
        }
      });
      
        
         // Save the updated passwordList back to local storage
      localStorage.setItem('passwordList', JSON.stringify(updatedPasswordList));
      onUpdateUserData(updatedPasswordList);
      
      };

  return (
    <>
        <dialog 
        id='update'
        className='updateModal rounded-xl shadow-xl'>
            <UpdatePassword 
            onUpdate = {handleUpdatePassword}  
            handleModal={handleModal}
            item={user}
            />
        </dialog>
        <div className='w-full md:w-1/4 md:fixed top-0 left-0  flex flex-col justify-between pt-8 pb-10 px-6 md:px-8   bg-[#13213C] h-auto md:h-full sidebar'>
            <div className='flex flex-col  w-full h-auto'>
                <div className='flex flex-row justify-between items-center w-full'>
                    <div className='w-full flex flex-row items-start justify-start mb-16'>
                        <h1 className='text-[#1c7ee7] text-sm font-bold px-4 py-3 bg-white rounded-xl '>SECURE<span className='text-[#41fff9]'>CHECK</span></h1>
                    </div>
                   
                </div>
                <div className='mb-5 flex flex-col items-center gap-4'>
                    <FaUserCircle className='text-white text-6xl' />
                    <h1 className='text-gray-300 text-3xl'>Hello, <span className='text-white font-bold'>{name}</span></h1>
                </div>
                <p className='text-gray-300 mb-4 text-sm'>Welcome to SECURECHECK dashboard, kindly sort through the user and password</p>
                
                

                <div className='flex flex-col mt-12'>
                    <p className='text-lg font-bold text-gray-400'>
                        View Based On Password Strength
                    </p>

                    <div className='w-full grid grid-cols-3 items-center justify-center mt-4 gap-4  select'>
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
                <div className='flex flex-row justify-center mt-8 w-full'>
                        <button onClick={() => handleModal({user})}  className=" text-white bg-[#afcbe3] hover:bg-[#0f67da] hover:border-[#0f67da]  focus:outline-none font-bold rounded-lg text-sm w-auto md:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update Password</button>
                        
                </div>
                <div className='flex flex-row justify-center mt-8 w-full'>
                        <button onClick={onLogout}  className=" text-white bg-[#3296ee] hover:bg-[#0f67da] hover:border-[#0f67da]  focus:outline-none font-bold rounded-lg text-sm w-auto md:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout</button>
                        
                </div>
            </div>

        </div>
    </>
  )
}

export default AdminNavbar