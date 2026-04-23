import './index.css';

const Login = () => {

    const onSubmitData = async (event) => {
        
        event.preventDefault();
        
         const api = "https://apis.ccbp.in/login";
         const userDetails = {
            username: "rahul", password: "rahul@2021"
        }
        const options = {
            method: "POST",
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
    };

    return (
        <div className="login-cont">
            <h1 className="text-primary">Login</h1>
            <form className='w-50 p-4 rounded-large shadow ' onSubmit={onSubmitData}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your username with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default Login;