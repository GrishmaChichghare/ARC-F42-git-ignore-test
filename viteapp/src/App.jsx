import Categories from './components/categories';
import './App.css';
import { useCounter } from './customHook';

const myStyle = { color : "blue", fontSize : "60px"};

const App = () => {

    const [counter,incCounter,decCounter] = useCounter();
    
    return(
        
        <>

        <div className='main-cont'>
            <h3>App Component</h3>

            <h1 style={myStyle}>{counter}</h1>
            <br />

            <div>
                <button onClick={() => {decCounter()}} className='btn btn-danger mr-4'>DEC</button>
                <button onClick={() => {incCounter()}} className='btn btn-success'>INC</button>
            </div>
        </div>

        <hr /><hr/>
        <Categories/>

        </>   
    )
}
export default App;