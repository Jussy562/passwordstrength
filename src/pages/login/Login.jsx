import React, {useState, useEffect,  }from 'react';
import * as yup from 'yup';
import { FaSmile } from 'react-icons/fa'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';





function Login({onLogin}) {
  
  const [passwordStrength, setPasswordStrength] = useState('');
  
  const [page, setPage] = useState(true);
  const toggleForm = () => setPage(!page);
  const [iconColor, setIconColor] = useState('');
 

  const loginSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    password: yup.string().required('Password is required'),
  });

  const signUpSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
   
   
    password: yup
      .string()
      .test(
        'password',
        'Password is required',
        (value) => value !== undefined && value !== null && value.trim() !== ''
      )
      .test(
        'password',
        'Password should contain at least 1 upper case, 1 lower case, 1 number, 1 character',
        (value) => /^(?=.*[a-z])(?=.*[A-Z]).*$/.test(value)
      )
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), ''], 'Passwords must match')
      .required('Confirm password is required'),
  });

  const schema = page ? signUpSchema : loginSchema;

    
    const { register, handleSubmit, formState: { errors }, watch } = useForm({
      resolver: yupResolver(schema)
    });

    const getPasswordStrength = (password) => {
      if (password.length < 6) {
        return 'Very Poor';
      } else if (password.length === 6) {
        return 'Weak';
      }
      else if (password.length > 6 && password.length < 8) {
        return 'Moderate';
      } else if (password.length >= 8 && password.length < 12) {
        return 'Strong';
      } else if (password.length >= 12) {
        return 'Very Strong';
      }
    }

    const handlePasswordChange = (e) => {
      const password = e.target.value;
     
      setPasswordStrength(getPasswordStrength(password));
    }

    useEffect(() => {
      
      // Define color logic based on the value of passwordStrength
      if (passwordStrength === 'Very Poor') {
        setIconColor('#ff0808'); // Set the color to red for 'Very Poor' strength
      } else if (passwordStrength === 'Weak') {
        setIconColor('#ffa803'); // Set the color to orange for 'Weak' strength
      } else if (passwordStrength === 'Moderate') {
        setIconColor('#fff003'); // Set the color to yellow for 'Moderate' strength
      } else if (passwordStrength === 'Strong') {
        setIconColor('#b6ff03'); // Set the color to green for 'Strong' strength
      } else if (passwordStrength === 'Very Strong') {
        setIconColor('#04c200'); // Set the color to blue for 'Very Strong' strength
      } else {
        setIconColor(''); // Reset the color if the password strength is empty
      };
    
    }, [passwordStrength]);

    const navigate = useNavigate();

    const handleLoginClick = () => {
     
        navigate('/dashboard');
      
    };

    const onSubmitSignup = (data, e) => {
      let passwordList = JSON.parse(localStorage.getItem('passwordList')) || [];
      

      const passwordStrength = getPasswordStrength(data.password);
      const formData = {
        ...data,
        signupTime: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
        strength: passwordStrength
      };
     
      localStorage.setItem('passwordList', JSON.stringify([...passwordList, formData]));
      alert('Your account has been created successfully!');
      e?.target.reset();
      setPage(!page);
      console.log(data);
    };
    
    const onSubmitLogin = (data, e) => {
      e.preventDefault();
      const loginData = {
        name: data.name,
        password: data.password
      };
     
      onLogin(loginData);
      e?.target.reset();
      setPage(!page);
      handleLoginClick();
      
    };

    const onSubmit = page ? onSubmitSignup : onSubmitLogin;

    
  
    
    
  
    
  return (
    <div className='flex flex-col-reverse md:flex-row md:justify-center items-center login py-0 md:py-0 h-full'>
        
      <div className='w-full md:w-1/2 flex justify-center items-center  h-full px-2 md:px-4 py-8 md:py-10 formSection '>
        {
          page ? 
          <form  className='w-full md:w-full h-full bg-gray-50 shadow-2xl rounded-xl p-4  md:p-6 details' onSubmit={handleSubmit(onSubmit )}>
            <div className='mb-6 md:mb-10 flex flex-col justify-center items-center'>
              <h2 className='text-black dark:text-white text-xl md:text-2xl font-bold'><span className="text-[#1666dc]">Welcome! </span></h2>
              <p className='text-black text-lg'>Enter your details to create a new account</p>
            </div>
            <div className='flex flex-col justify-between items-start gap-4 w-full mb-4'>
              <div className="mb-6 flex flex-col text-start w-full">
                <label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Name</label>
                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register('name')}  placeholder="First Name"   />
                { errors.name && <p className='text-red-400 text-xs'>{errors.name.message}</p>}
              </div>
              
            </div>

     
          
            <div className='flex flex-col justify-between items-center gap-4 w-full'>
              <div className="mb-6 flex flex-col text-start w-full">
                <label htmlFor="password" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Create password</label>
                <input type="password" id="password" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                placeholder='*******' 
                {...register('password')}
                onChange={handlePasswordChange}
                 />
                {errors.password && <p  className='text-red-400 text-xs'>{errors.password.message}</p>}
              </div>
              <div className="mb-6 flex flex-col text-start w-full">
                <label htmlFor="confirmPassword" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Confirm password</label>
                <input type="password" id="confirmPassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder='*******' {...register('confirmPassword')}  />
                { errors.confirmPassword && <p  className='text-red-400 text-xs'>{errors.confirmPassword.message}</p>}
              </div>
            </div>
          
          {/*  */}
          <div className='mb-5'>
            <p className='text-sm'>Already have an account? <span className='text-red-500 cursor-pointer text-xs' onClick={toggleForm}>Login</span></p>
          </div>
          <div >
              <button type="submit" className="text-white bg-[#3296ee] hover:bg-[#0f67da] hover:border-[#0f67da]  focus:outline-none font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Create account</button>
            </div>
        </form>
            : 

            <form  className='w-full md:w-full h-full bg-gray-50 shadow-2xl rounded-xl p-4  md:p-6 details' onSubmit={handleSubmit(onSubmit)}>
             <div className='mb-6 md:mb-10 flex flex-col justify-center items-center'>
              <h2 className='text-black dark:text-white text-xl md:text-2xl font-bold'><span className="text-[#1c7ee7]">Welcome Back!</span></h2>
              <p className='text-black text-lg'>Enter your details to login</p>
            </div>

            <div className='flex flex-col justify-between items-start gap-4 w-full mb-4'>
              <div className="mb-6 flex flex-col text-start w-full">
                <label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Name</label>
                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register('name')}  placeholder="First Name"   />
                { errors.name && <p className='text-red-400 text-xs'>{errors.name.message}</p>}
              </div>
              
            </div>

          
            <div className='flex flex-row justify-between items-center'>
              <div className="mb-6 flex flex-col text-start w-full">
                <label htmlFor="password" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Enter password</label>
                <input type="password" id="loginPassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder='*******' {...register('password')} />
                {errors.password && <p  className='text-red-400 text-xs'>{errors.password.message}</p>}
              </div>
             
            </div>
              
              <div className='mb-5'>
                <p className='text-sm'>Don't have an account? <span className='text-red-500 cursor-pointer text-xs' onClick={toggleForm}>Create account</span></p>
              </div>
              <div>
                <button 
                type='submit'
                 
                className="text-white bg-[#3296ee] hover:bg-[#0f67da] hover:border-[#0f67da]  focus:outline-none font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                
              </div>
            </form>
        }
      </div>
     <div className='w-full md:w-1/2 flex flex-col justify-center items-center py-12 md:py-24 mb-8 md:mb-0  h-full md:h-full loginBanner'>
        
        <div className='w-2/3 flex justify-center items-center h-full'>
          <FaSmile 
         
          className="text-9xl"
          style={{ color: iconColor ? iconColor : '#b1b1bb' }} 
          
          />
         
        </div>
      </div> 

    </div>
  )
}

export default Login