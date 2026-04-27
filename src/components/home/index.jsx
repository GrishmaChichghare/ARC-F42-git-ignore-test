import Cookies from 'js-cookie';
import {useNavigate} from 'react-router-dom';
import './index.css';
import { useEffect } from 'react';

const Home = () => {

    const navigate = useNavigate();
    useEffect(() => {
        let token = Cookies.get("myToken");

        if (token === undefined) {
            navigate("/login");
        }
    });

    return <h1 style={{ color: 'red' }}> Home Component</h1>
}
export default Home;