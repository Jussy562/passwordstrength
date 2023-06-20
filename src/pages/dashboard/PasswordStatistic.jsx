import React from 'react'

function PasswordStatistic({title, statistic}) {

  let color;

  switch (title) {
    case 'Weak':
      color = '#ffa803'; 
      break;
    case 'Moderate':
      color = '#fff003'; 
      break;
    case 'Strong':
      color = '#b6ff03'; 
      break;
    case 'Very Strong':
      color = '#04c200'; 
      break;
    case 'All':
      color = '#0192f6';
      break;
    default:
      color = '#000000'; // Black (default color)
  }
  return (
    <div className='flex flex-col items-center justify-center'>
        <p>{title}</p>
        <div className='flex flex-row justify-center items-center p-10 rounded-2xl
        shadow-xl bg-white w-20 xl:w-40 statistic'>
            <p className='text-xl  font-bold' style={{ color }}>{statistic}</p>
        </div>
    </div>
  )
}

export default PasswordStatistic