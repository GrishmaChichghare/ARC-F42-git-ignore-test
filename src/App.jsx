import { useState}from "react";
import "./App.css";


const MyApp = () => {
    const [heading,setHeading] = useState("Hello World");
    const [counter,setCounter] = useState(0);

    const onChangeHeading = () => {
        setHeading("Heading has been changed");
    }

    return (
        <div className="main-cont">
            <h1>{heading}</h1>
            <br />
            <button onClick={onChangeHeading} className="btn btn-primary">change heading</button>
            <br />
            <h1 className="my-heading">{counter}</h1>
            <br />
            <div>
                <button onClick={()=>{setCounter(counter-1)}} className="btn btn-danger mr-3">DEC</button>
                <button onClick={()=>{setCounter(counter+1)}} className="btn btn-success">INC</button>
            </div>
        </div>
    );
}

export default MyApp;