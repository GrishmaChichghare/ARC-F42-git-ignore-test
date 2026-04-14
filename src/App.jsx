import{useRef} from 'react';
import './App.css';

const myStyle = {
    color : "blue",
    fontSize : "60px"
};

const App = () => {

    
    return(
        <div className='main-cont'>

            <h1 style={myStyle}>0</h1>
            <br />

            <div>
                <button onClick={() => {}} className='btn btn-danger mr-4'>INC</button>
                <button onClick={() => {}} className='btn btn-success'>DEC</button>
            </div>
        </div>
        
    )
}
export default App;