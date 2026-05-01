import { Link } from 'react-router';
import Navbar from '../navbar';
import './index.css';

const Home = () => {

    return(
        <div>
            <Navbar/>
            <br /><br />
            <div className='p-4'>
                <h1 style={{width:"400px"}}>Find your dream job and explore it with your expertise...</h1>
                <br /><br />
                <Link to = "/jobs" className='btn btn-primary'>Explore More</Link>
            </div>
        </div>
    ) 
}
export default Home;