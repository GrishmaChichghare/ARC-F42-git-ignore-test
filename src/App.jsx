import { useState}from "react";
import "./App.css";

function myFunc(value){
    let abc = value;

    function change(v1){
        abc = v1;
    }
    
    return [abc,change];
}

const [heading, setHeading] = myFunc("hello World");


const MyApp = () => {
    const [a,b] = useState("Hello World");

    const onChangeHeading = () => {
        b("Heading has been changed");
    }

    return (
        <div className="main-cont">
            <h1>{a}</h1>
            <br />
            <button onClick={onChangeHeading} className="btn btn-primary">change heading</button>
        </div>
    );
}

export default MyApp;