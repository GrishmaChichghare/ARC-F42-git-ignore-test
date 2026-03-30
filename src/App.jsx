import { useEffect, useState}from "react";
import Categories from "./components/categories";
import "./App.css";

const MyApp = () => {

    const [allValues,setValues] = useState({ 
        
        heading : "Hello World",
        counter : 0

    });
    
    useEffect(() =>{
        
        let interval = setInterval(() =>{

          setValues({...allValues, counter: allValues.counter+1});
        },1000);
          return() =>{clearInterval(interval)};
    });
    
    const onChangeHeading = () => {

        setValues({...allValues, heading: "Heading has been Changed"});
    }

    return (

        <div className="main-cont">

            <h1>{allValues.heading}</h1>
            <br />

            <button onClick={onChangeHeading} className="btn btn-primary">change heading</button>
            <br />

            <h1 className="my-heading">{allValues.counter}</h1>
            <br />

            <div>
                <button onClick={()=>{setValues({...allValues,counter:allValues.counter-1})}} className="btn btn-danger mr-3">DEC</button>
                <button onClick={()=>{setValues({...allValues,counter:allValues.counter+1})}} className="btn btn-success">INC</button>
            </div>
            <br />

            <Categories counter = {allValues.counter} />

        </div>
    );
}

export default MyApp;