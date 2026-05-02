import {useEffect} from 'react';
import Cookies from 'js-cookies';
import './index.css';

const JobsFilter = ()=> {

    useEffect (() => {
        const fetchProfile = async() => {
            const api = "https://apis.ccbp.in/profile";
            const token = Cookies.get("myToken");

            const options = {
                method : "GET",
                headers : {
                    Authorization : `Bearer ${token}`
                }
            }
            try{
                const response = await fetch(api, options);
                const data = await response.json();
                console.log(data);
            }
            catch(error){
                console.log(error);
            }
        }
        
        fetchProfile();

    }, []);
    const displayProfile = () => {
        <h1></h1>
    }
    return(
        <div>
            {displayProfile()}
        </div>
    )
}

export default JobsFilter;