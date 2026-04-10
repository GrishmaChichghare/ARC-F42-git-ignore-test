import './App.css';
import { useEffect, useState } from 'react';

const MyApp = () =>{
    const [allValues, setValues] = useState({
        name : "",
        email : "",
        gender : "",
        status : "Active",
        errorMsg : ""
    });

    const createNewuser = async (event) =>{
        event.preventDefault();

        // console.log(event);

        const api = "https://gorest.co.in/public/v2/users";

        const userDetails = {
            name: allValues.name,
            email : allValues.email,
            gender : allValues.gender,
            status : allValues.status
        }

        const options = {
            method : "Post",
            headers: {
                "Content-type": "application/json",
                Authorization : "Bearer 01cecd880c96b72a5052b5d910889a2228e8b2d7618c0ad26320b95bdf8c9493."
                
            },
            body: JSON.stringify(userDetails)
        }

        try{
            const response = await fetch(api, options);
            const data = await response.json();
            console.log(response);
            console.log(data);

            if(response.ok){
                setValues({...allValues, errorMsg : ""});
            }
            else{
                console.log(response);
                setValues({...allValues, errorMsg : data[0].field + ""+ data[0].message});
            }
             // console.log(data[0].field + " " + data[0].message);
        }
        catch(error){
            console.log(error);
        }
    }
    const onChangeName = (event) => {
        // console.log(event.target.value);
        setValues({...allValues, name : event.target.value});
    }


    return(

        <div className='main-cont'>

            <h2 className='text-primary'>Login</h2>
            <br />

            <form className='my-form shadow w-50 p-4 rounded' onSubmit={createNewuser}>
                <label htmlFor="name">Name :</label>
                <input onChange={onChangeName} className='form-control' type="text" id="name" />
                <br />

                <label htmlFor="email">Email :</label>
                <input onChange={(event) => setValues({...allValues, email : event.target.value})} className='form-control' type="text" id="email" />
                <br />

                <p>Gender : </p>
                <input type="radio" name="gender" id="male" value="Male"/>
                <label className="ml-2 mr-4" htmlFor="male">Male </label>
  
                
                <input type="radio" name="gender" id="female" value="Female"/>  
                <label className="ml-2" htmlFor="female">Female </label> 
                <br />

                <p>Status:</p>         
                <select name="status" className='form-control'>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
                <br />

                <button type="submit" className='btn btn-primary'>Login </button>
                <b>{allValues.errorMsg}</b>
            </form>
            
        </div>
    )
}
export default MyApp;