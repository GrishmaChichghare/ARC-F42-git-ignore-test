import {useEffect, useState} from "react";


const SectionB = () => {

const [display, setDisplay] = useState(false);
    useEffect(() => {
        for(let i=0; i <10000000; i++){
        
            if(i === 9999999){
    
                setDisplay(true);
            }
        }

    },[]);

    return(
        <>
            {
                display && <h1 style= { { color: "red"}}> Section B Component </h1>
            }

        </>
    )
}
export default SectionB;