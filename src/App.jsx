import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';


const App = () => {
    const [allValues, setValues] = useState({
        usersArr : [],
        showLoader : false  //true if check loader, false if not
    });

    useEffect(() => {
        const fetchusers = async ()=> {
            setValues({...allValues, showLoader : true});
            
            const api = "https://gorest.co.in/public/v2/users";

            try {
                const response = await fetch (api);
                const data = await response.json();

                if( response.ok){
                    console.log(data);

                    setValues({...allValues, usersArr : data , showLoader :false}); //if u want to show loader, then set showloader true (or delete this show loader false).     
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
            allValues.showLoader 
            ?
            <div class="spinner-border text-primary" role="status">+
                <span class="sr-only">Loading...</span>
            </div>
            : 
            (
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