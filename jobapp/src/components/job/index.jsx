import Navbar from '../navbar';
import JobsCard from '../jobsCard';
import JobsFilter from '../jobsFilter';
import Cookies from 'js-cookie';
import './index.css';
import {useEffect} from 'react';
import {useState} from 'react';

const Jobs = () => {

    const [allValues,setValues] = useState({
        jobsArr : []
    });

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

                if(response.ok){
                    setValues({...allValues, jobsArr: data.jobs});
                }
                
            }
            catch(error){
                console.error('Error fetching jobs:', error);
            }
        }
        fetchJobs();
    });

    return (
        <div>
            <Navbar/>
                 <div className='conatiner'> 

                    <div className='row'>

                        <div className='col-4'>
                            <JobsFilter/>
                        </div>

                        <ul style={{listStyle: 'none'}} className='col-8 p-3'>
                            {
                                allValues.jobsArr.map( each => <JobsCard key={each.id} jobsItem={each} />)
                            }
                        </ul>

                    </div>
                 </div>
        </div>
    )
}

export default Jobs;