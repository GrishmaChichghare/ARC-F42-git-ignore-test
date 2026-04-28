import SectionA from './components/SectionA';
// import SectionB from './components/SectionB';
import SectionC from './components/SectionC';
import {lazy, Suspense} from "react";

const SectionB = lazy(() => import('./components/SectionB'));
import './App.css';

const App = () => {

    return(
        
        <div className='main-cont'>

            <h1 style={{ color: 'blue' }}>App Component</h1>

            <hr /><hr />

            <SectionA/>

            <hr /><hr />
            
            <Suspense fallback={<p>Loading...</p>}>
                <SectionB/>
            </Suspense>

            <hr /><hr />

            <SectionC/>

            <hr /> <hr/>
        
        </div>
        
    )
}
export default App;