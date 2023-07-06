import React,{ useState } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FiEye, FiEyeOff } from 'react-icons/fi';


function UpdatePassword({onUpdate, handleModal, item}) {
   

    const user = item;
    console.log('item:', user);
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };
    const [passwordStrength, setPasswordStrength] = useState('');
    const schema = yup.object().shape({
        
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

      const onSubmit = (data, e) => {
        e.preventDefault();
        
  
        const passwordStrength = getPasswordStrength(data.password);
        const formData = {
            ...user,
            password: data.password,
            confirmPassword: data.confirmPassword,
            signupTime: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
            strength: passwordStrength
          };
       
        onUpdate(formData);
        alert('Your password has been updated successfully!');
        e?.target.reset();
        handleModal();
        console.log(formData);
       
      };

  return (
    <div className='updateModal'>
        <div className='flex flex-row justify-between items-center'>
          {
            user && (
              <div className='w-full flex flex-row justify-start items-center'>
                <h3 className='text-[#3296ee] text-lg font-bold'>{user.userName}</h3>
              </div>
            )
          }

          
          <div className='w-auto'>
                 <button 
                 type='submit'
                  onClick={handleModal}
                 className="text-white bg-[#d2cfcf] hover:bg-[#da0f0f] hover:border-[#da0f0f]  focus:outline-none font-bold rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-gray-400 dark:hover:bg-red-700 dark:focus:ring-none">X</button>
                 
          </div>
        </div>
        <form  className='w-full md:w-full h-full flex flex-col items-center justify-center bg-gray-50 shadow-2xl rounded-xl p-4  md:p-6 details' onSubmit={handleSubmit(onSubmit)}>
        
        <div className='flex flex-col md:flex-row justify-between items-center gap-4 w-full mb-6'>
              
              <div className="mb-0 flex flex-col text-start w-full">
                <label htmlFor="password" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Create new password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="******************************"
                    {...register('password')}
                    onChange={handlePasswordChange}
                  />
                  <div
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </div>
                </div>
                {errors.password && <p  className='text-red-400 text-xs'>{errors.password.message}</p>}
              </div>
              <div className="mb-0 flex flex-col text-start w-full">
                <label htmlFor="confirmPassword" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Confirm new password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="******************************"
                    {...register('confirmPassword')}
                    onChange={handlePasswordChange}
                  />
                  <div
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </div>
</div>
                { errors.confirmPassword && <p  className='text-red-400 text-xs'>{errors.confirmPassword.message}</p>}
              </div>
            </div>
               
              
               <div className='w-full'>
                 <button 
                 type='submit'
                  
                 className="text-white bg-[#3296ee] hover:bg-[#0f67da] hover:border-[#0f67da]  focus:outline-none font-bold rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                 
               </div>
             </form>
    </div>
  )
}

export default UpdatePassword