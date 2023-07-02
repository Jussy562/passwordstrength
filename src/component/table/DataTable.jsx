import React, { useEffect, useState } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import UpdatePassword from '../../pages/admin/UpdatePassword';

function DataTable({userData, }) {
  


   
  
  const currentDate = new Date();
  

 
  
 
  

  
  return (
    <>
     
      <div className="media rounded-2xl">
 
        <div className="media-body w-full shadow-xl rounded-xl">
            
            <h4 className="media-heading text-black text-lg font-bold mb-3 rounded-t-xl">Password Strength Ladder Board</h4>
            <div className=' table-container rounded-2xl w-full'>
              <table className="user-table  rounded-2xl p-0 md:p-4  bg-white w-full">
                  <thead className='border-collapse border-none m-0 p-0 w-full'>
                    
                      <tr className='w-full'>
                      <th className='text-sm md:text-lg'> Name</th>
                      <th className='text-sm md:text-lg'> Username</th>
                      <th className='text-sm md:text-lg'> Strength</th>
                      <th className='text-sm md:text-lg'> Time</th>
                      </tr>
                    
                  </thead>
                  <tbody className='w-full '>
                  {
                    userData.map((item, index) =>
                    {  let color;
                      let text;

                      switch (item.strength) {
                        case 'Weak':
                          color = '#ffa803';
                          text= '#995c01';
                          break;
                        case 'Moderate':
                          color = '#fff003';
                          text = '#464602';
                          break;
                        case 'Strong':
                          color = '#b6ff03';
                          text = '#064b05';
                          break;
                        case 'Very Strong':
                          color = '#04c200';
                          text = '#082506';
                          break;
                        default:
                          color = '#000000';
                          text = '#ffff' // Black (default color)
                      }

                      const strength = item.strength || 'NILL';
                      const signupDate = item.signupTime ? new Date(item.signupTime) : null;
                      const isCurrentDate = signupDate && signupDate.toDateString() === currentDate.toDateString();

                      const time = signupDate ? (isCurrentDate ? signupDate.toLocaleTimeString() : signupDate.toLocaleDateString()) : 'NILL';
                      console.log(userData);
                      return (
                                        <tr key={index} className='text-start w-full' 
                                        >
                                          <td className='text-sm md:text-lg'>
                                            <strong className='flex flex-row items-center gap-2'>
                                              <FaUserAlt />
                                            {item.name}
                                            </strong>
                                          </td>
                                          <td className='text-sm md:text-lg'>{item.userName}</td>
                                          <td className='text-sm md:text-lg '>
                                            <p
                                            className='status cursor-pointer' 
                                            style={{backgroundColor: color, color:text}}>
                                              {strength}</p>
                                          </td>
                                          <td className='text-sm md:text-lg'>{time}</td>
                                        </tr>
                                      )
                                    })
                  }
                      
                  </tbody>
              </table>
            </div>
        </div>
        </div>
    </>

  )
}

export default DataTable