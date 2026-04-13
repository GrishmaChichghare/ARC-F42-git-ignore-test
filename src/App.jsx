import { useEffect, useState } from 'react';
import './App.css';


const App = () => {
    const [allValues, setValues] = useState({
        usersArr : [],
        showLoader : false  //true if check loader, false if not
    });

        const deleteUserData = async ()=> {
            
            const api = "https://api.restful-api.dev/objects/ff8081819d82fab6019d8793128705b7";

            const options  = {
                method : "Delete"
            }
            
            try {
                const response = await fetch (api, options);
                const data = await response.json();

                if( response.ok){
                    console.log(data);
                }
            }
            catch(error){
                
                console.error( error);
            }
        }
        
    return(
        <div className='main-cont'>
            <button onClick={deleteUserData} className='btn btn-primary'>Delete</button>
        </div>
    )
}
export default App;