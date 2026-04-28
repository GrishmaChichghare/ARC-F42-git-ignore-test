import Navbar from '../navbar';
import JobsCard from '../jobsCard';
import JobsFilter from '../jobsFilter';
import Cookies from 'js-cookie';
import './index.css';
import {useEffect} from 'react';

const Jobs = () => {

    useEffect (() =>{

        const fetchJobs = async() => {

            const api = "https://apis.ccbp.in/jobs";
            
            const token = Cookies.get('myToken');

            const options = {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            try{
                const response = await fetch(api, options);
                const data = await response.json();
                console.log(data.jobs);
            }
            catch(error){
                console.error('Error fetching jobs:', error);
          
            }
        }
        fetchJobs();
    },[]);

    return (
        <div className=''>
            <Navbar/>
                 <div className='conatiner'> 

                    <div className='row'>

                        <div className='col-4 border border-primary'>
                            <JobsFilter/>
                        </div>

                        <ul className='col-8 border border-danger'>
                            <JobsCard/>
                        </ul>

                    </div>
                 </div>
            
        </div>
    )
}
export default Jobs;