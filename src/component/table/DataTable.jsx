import React from 'react'
import { FaUserAlt } from 'react-icons/fa'

function DataTable({userData}) {
  console.log(userData);
  const currentDate = new Date();
  
  return (
    <div className="media rounded-2xl">
 
        <div className="media-body shadow-lg">
            <h4 className="media-heading text-black font-bold mb-3">USER DATA</h4>
            <div className=' table-container rounded-2xl'>
              <table className="user-table  rounded-2xl p-4 bg-white">
                  <thead className='rounded-2xl' >
                    
                      <tr>
                      <th> Name</th>
                      <th> Password</th>
                      <th> Strength</th>
                      <th> Time</th>
                      </tr>
                    
                  </thead>
                  <tbody>
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

                      return (
                                        <tr key={index} className='text-start'>
                                          <td>
                                            <strong className='flex flex-row items-center gap-2'>
                                              <FaUserAlt />
                                            {item.name}
                                            </strong>
                                          </td>
                                          <td className=''>{item.password}</td>
                                          <td ><p className='status' style={{backgroundColor: color, color:text}}>{strength}</p></td>
                                          <td>{time}</td>
                                        </tr>
                                      )
                                    })
                  }
                      
                  </tbody>
              </table>
            </div>
        </div>
    </div>

  )
}

export default DataTable