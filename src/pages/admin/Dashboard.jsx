import React, {useState, useEffect} from 'react'
// import SampleData from './sample'
import AdminNavbar from '../../component/Navbar/Sidebar'
import dashboardbanner from '/assets/dashboardbanner.jpg';
import PasswordStatistic from './PasswordStatistic';
import DataTable from '../../component/table/DataTable';


function Dashboard({onLogout}) {
    const [passwordInfo, setPasswordInfo] = useState([]);
    const [passwordStrength, setPasswordStrength] = useState('');
    const [weakPasswords, setWeakPasswords] = useState(0);
    const [moderatePasswords, setModeratePasswords] = useState(0);
    const [strongPasswords, setStrongPasswords] = useState(0);
    const [veryStrongPasswords, setVeryStrongPasswords] = useState(0);
    const [allPasswords, setAllPasswords] = useState(0);
    const [loggedUser, setLoggedUser] = useState(null);
  

    useEffect(() => {
        // Retrieve stored form data from local storage
        const storedLoggedUser = localStorage.getItem('loginDetails');
        if(storedLoggedUser) {
          const userData = JSON.parse(storedLoggedUser);
          setLoggedUser(userData);
        }
        const storedPasswordData = localStorage.getItem('passwordList');
    
        if (storedPasswordData) {
          // Parse the stored form data as an object
          const passwordData = JSON.parse(storedPasswordData);
          console.log('passwordList:', passwordData);
          setPasswordInfo(passwordData);

          const weakCount = passwordData.filter((user) => user.strength === 'Weak').length;
          const moderateCount = passwordData.filter((user) => user.strength === 'Moderate').length;
          const strongCount = passwordData.filter((user) => user.strength === 'Strong').length;
          const veryStrongCount = passwordData.filter((user) => user.strength === 'Very Strong').length;
          const allCount = passwordData.length;

          setWeakPasswords(weakCount);
          setModeratePasswords(moderateCount);
          setStrongPasswords(strongCount);
          setVeryStrongPasswords(veryStrongCount);
          setAllPasswords(allCount);
    
        }
      }, []);
    
      const handleWeakPassword = () => setPasswordStrength('Weak');
      const handleModeratePassword = () => setPasswordStrength('Moderate');
      const handleStrongPassword = () => setPasswordStrength('Strong');
      const handleVeryStrongPassword = () => setPasswordStrength('Very Strong');
      const handleAllPassword = () => setPasswordStrength('');

      let userForDisplay = passwordInfo.filter((user) => {
        if (passwordStrength === 'Weak') {
          return user.strength === 'Weak';
        } else if (passwordStrength === 'Moderate') {
          
          return user.strength === 'Moderate';
          
        }  else if (passwordStrength === 'Strong') {
          
          return user.strength === 'Strong';
          
        } else if (passwordStrength === 'Very Strong') {
          
          return user.strength === 'Very Strong';
          
        }
        else {
          return user;
        }
      })

      userForDisplay.sort((a, b) => {
        const strengthOrder = {
          'Very Strong': 0,
          Strong: 1,
          Moderate: 2,
          Weak: 3,
        };
        return strengthOrder[a.strength] - strengthOrder[b.strength];
      });
      
  return (
    <div className='flex flex-col w-full bg-[#d2d3de] '>
        {/* <div className=' w-full banner h-40'>
            <img src={dashboardbanner} alt='dashboard banner' className='banner-image h-full' /> 
        </div> */}
        <div className='w-full h-full flex flex-col md:flex-row bg-[#eaeaea]'>
            
            <div className='w-full md:w-1/3 h-full left-0 top-0   py-0 '>
                <AdminNavbar
                handleWeakPassword={handleWeakPassword} 
                handleModeratePassword={handleModeratePassword}
                handleStrongPassword={handleStrongPassword}
                handleVeryStrongPassword={handleVeryStrongPassword}
                handleAllPassword={handleAllPassword}
                user = {loggedUser}
                onLogout={onLogout} />
            </div>
            <div className='w-full md:w-2/3 top-0 flex flex-col h-full relative left-0 '>
                <div className=' w-full banner h-40'>
                    <img src={dashboardbanner} alt='dashboard banner' className='banner-image h-full' /> 
                </div>
                    
                <div className='mb-0 w-full p-4 md:p-10 pb-4 flex flex-row flex-wrap gap-4 justify-center items-center h-auto'>
                    <PasswordStatistic title='Weak' statistic={weakPasswords} />
                    <PasswordStatistic title='Moderate' statistic={moderatePasswords} />
                    <PasswordStatistic title='Strong' statistic={strongPasswords} />
                    <PasswordStatistic title='Very Strong' statistic={veryStrongPasswords} />
                    
                    <PasswordStatistic title='All' statistic={allPasswords} />
                </div>
                <div className='flex flex-col w-full h-auto px-2 md:px-6 py-8 md:py-10 pt-4 justify-start tablediv shadow-lg bg-white'>
                  <DataTable userData={userForDisplay} />
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard