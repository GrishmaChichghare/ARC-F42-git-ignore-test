import './App.css';
import { useEffect, useState } from 'react';

const MyApp = () => {

    const [allValues, setValues] = useState({
        heading : ""
    });
    
    useEffect(() => {
        const fetchJokes = async() => {
            const api = "https://apis.ccbp.in/jokes/random";

            try{
                const response = await fetch(api);
                const data = await response.json();

                console.log(data);

                setValues({...allValues, heading : data.value});
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchJokes();
    },[])
    return(
        <div className='main-cont'>
            {/* <button onClick={fetchJokes} className='btn btn-primary'>Fetch Data</button> */}
            <br /><br />
            <h2>{allValues.heading}</h2>
        </div>
    )
}

export default MyApp;