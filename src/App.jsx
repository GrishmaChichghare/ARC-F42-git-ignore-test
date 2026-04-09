import './App.css';
// import { useEffect, useState } from 'react';

const MyApp = () =>{
    // const [allValues, setValues] = useState({
        
    //     heading: ""
    // });

    const createNewuser = async (event) => {
        event.preventDefault();

        // console.log(event);

        const api = "https://gorest.co.in/public/v2/users";

        const userDetails = {
            name: "Samiksha",
            email : "samiksha@gmail.com",
            gender : "Female",
            status : "active"
        }

        const options = {
            method : "Post",
            headers: {
                "content-type": "application/json",
                'Authorization': "Bearer 9b1c8e7a0d1f2c5e4b3a6d8f9e0a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2a3b4c5d6e7f8g9h0i1j2k3l4m5n6o7p8q9r0s1t2u3v4w5x6y7z8a9b0c1d2e3f4g5h6i7j8k9l0m1n2o3p4q5r6s7t8u9v0w1x2y3z4a5b6c7d8e9f0g1h2i3j4k5l6m7n8o9p0q1r2s3t4u5v6w7x8y9z"
                
            },
            body: JSON.stringify(userDetails)
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


    return(

        <div className='main-cont'>

            <h2 className='text-primary'>Login</h2>
            <br />

            <form className='my-form shadow w-50 p-4 rounded' onSubmit={createNewuser}>
                <label htmlFor="name">Name :</label>
                <input className='form-control' type="text" id="name" />
                <br />

                <label htmlFor="email">Email :</label>
                <input className='form-control' type="text" id="email" />
                <br />

                <p>Gender : </p>
                <input type="radio" name="gender" id="male" value="Male"/>
                <label className="ml-2 mr-4" htmlFor="male">Male </label>
  
                
                <input type="radio" name="gender" id="female" value="Female"/>  
                <label className="ml-2" htmlFor="female">Female </label> 
                <br />

                <p>Status:</p>         
                <select name="status" className='form-control'>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
                <br />

                <button type="submit" className='btn btn-primary'>Login </button>
            
            </form>
            
        </div>
    )
}
export default MyApp;