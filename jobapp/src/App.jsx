import Home from './components/home';
import Jobs from './components/job';
import LogIn from './components/login';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/notFound';

const App = () => {
  return (
    <>
      <h1>App component</h1>
      <Routes>
        
        <Route path='/' element={<Home />}></Route>
        <Route path='/jobs' element={<Jobs />}></Route>
        <Route path='/login' element={<LogIn />}></Route>
        <Route path='/*' element={<NotFound />}></Route>

      </Routes>
    </>
      
  );
}

export default App;