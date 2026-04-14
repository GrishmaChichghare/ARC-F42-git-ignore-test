import{useRef} from 'react';
import './App.css';


const App = () => {

    let heading = useRef();
    const changeHeading =() =>{
        // console.log(heading.current);
        heading.current.textContent = "Heading has been changed";
        heading.current.style.color = "red";

    }
    
    return(
        <div className='main-cont'>

            <h1 ref={heading}>Hello World</h1>
            <br />

            <button onClick={changeHeading} className='btn btn-primary'>Change</button>
        </div>
    )
}
export default App;