import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Jobs from "./components/job";
import LogIn from "./components/login";
import NotFound from "./components/notFound";
import ProtectedRoute from "./components/protectedRoute";

const App = () => {
  return (
    <>
    
      {/* <h1>App component</h1> */}
      <Routes>
        
        <Route path='/' element={<ProtectedRoute Component={Home} />}></Route>
        <Route path='/login' element={<LogIn />}></Route>
        <Route path='/jobs' element={<ProtectedRoute Component={Jobs} />}></Route>
        <Route path='/*' element={<NotFound />}></Route>

      </Routes>
      </>
  );
}
export default App;