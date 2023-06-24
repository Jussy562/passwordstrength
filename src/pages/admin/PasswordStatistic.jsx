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
        <div className='flex flex-row justify-center items-center px-12 py-8 rounded-2xl
        shadow-xl bg-white w-20 md:w-24 xl:w-36 statistic'>
            <p className='text-2xl font-extrabold' style={{ color }}>{statistic}</p>
        </div>
    </div>
  )
}

export default PasswordStatistic