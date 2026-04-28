import Navbar from '../navbar';
import JobsCard from '../jobsCard';
import JobsFilter from '../jobsFilter';
import './index.css';

const Jobs = () => {
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