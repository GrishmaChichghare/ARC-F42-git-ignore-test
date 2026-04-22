import {useEffect, useState} from "react";


const SectionB = () => {

const [display, setDisplay] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setDisplay(true);
        }, 1000);
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