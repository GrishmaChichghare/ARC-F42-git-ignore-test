import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';


const App = () => {
    const [allValues, setValues] = useState({
        usersArr : [],
        showLoader : false
    });

    useEffect(() => {
        const fetchusers = async ()=> {
            
            const api = "https://gorest.co.in/public/v2/users";

            try {
                const response = await fetch (api);
                const data = await response.json();

                if( response.ok){
                    console.log(data);

                    setValues({...allValues, usersArr : data});
                }
            }
            catch(error){
                
                console.error( error);
            }
        }
        fetchusers();
    },[]);

    return(
        <div className='main-cont'>

           {
            allValues.showLoader ? <h1></h1> : (
                <ul>
            {
                allValues.usersArr.map(each => <li key={each.id}> <h3>{each.name}</h3></li>)
            }
           </ul>

            )
           }
        </div>
    )
}
export default App;