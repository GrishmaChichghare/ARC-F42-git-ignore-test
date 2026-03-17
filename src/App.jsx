
import "./App.css";
import Categories from "./components/categories";
import Nav from "./components/nav";
import SubCategories from "./components/subCategories";

const usersDetails = [
    {
    id : 1,
    name : "rajesh",
    status : "active",
    email : "rajesh@gmail.com",
    domain : "Fullstack"
},
{
    id : 2,
    name : "vishnu",
    status : "active",
    email : "vishnu@gmail.com",
    domain : "Fullstack"
},
{
    id : 3,
    name : "suresh",
    status : "active",
    email : "suresh@gmail.com",
    domain : "Fullstack"
},
{
    id : 4,
    name : "ramesh",
    status : "active",
    email : "ramesh@gmail.com",
    domain : "Fullstack"
},
]
const MyApp = () => {
    return(
      <div className="main-cont">
        {
            usersDetails.map(each => {
                // eslint-disable-next-line no-unused-vars
                const {name,email,status,domain} = each;

                return(
                    <li className="my-list p-3 shadow w-50 rounded-lg">
                        <div className="profile">
                            <h3>{name[0]}</h3>
                        </div>
                        <div className="my-content border-left border-danger ml-3 p-3">
                            <h3>{name}</h3>
                            <b>Email: {email}</b>
                            <br />
                            <span>Domain: {domain}</span>
                        </div>
                    </li>
                ) 
            })
        }
    </div>
    )
}

export default MyApp;