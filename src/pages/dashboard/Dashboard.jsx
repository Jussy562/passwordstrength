import React from 'react'
import SampleData from './sample'
function Dashboard() {
  return (
    <div className='w-full h-full flex flex-col py-20'>
        <div className='mb-16'>
            <h2 className='text-blue-500 text-2xl mb-2'>Welcome!</h2>
            <p>Take a look the password accourding to strength level</p>
        </div>
        <div className='flex flex-col gap-5 w-full px-24 py-10 justify-center h-auto'>
            {
                SampleData.map((item) => {
                    return (
                        <div key={item.id}
                        className='flex flex-row justify-between items-center 
                        px-4 py-5 bg-gray-50 rounded-xl'>
                            <p>{item.name}</p>
                            <p>{item.password}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Dashboard