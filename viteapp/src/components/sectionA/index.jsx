import { useCounter } from '../../customHook';
const myStyle = {
    color : "black",
    fontSize : "60px"
};

const Categories = () => {
        const [counter,incCounter,decCounter] = useCounter();
    

       return(
        <div className='main-cont'>
            <h3>Categories component</h3>

            <h1 style={myStyle}>{counter}</h1>
            <br />

            <div>
                <button onClick={() => {decCounter()}} className='btn btn-danger mr-4'>DEC</button>
                <button onClick={() => {incCounter()}} className='btn btn-success'>INC</button>
            </div>
        </div>
        
    )
}
export default Categories;