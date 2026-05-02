import { FaStar } from "react-icons/fa";
import { FaLocationDot, FaBriefcase } from "react-icons/fa6";
import './index.css';

// {
//        "id": "bb95e51b-b1b2-4d97-bee4-1d5ec2b96751",
//        "title": "Devops Engineer",
//        "rating": 4,
//        "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
//        "location": "Delhi",
//        "job_description": "We are looking for a DevOps Engineer with a minimum of 5 years of industry experience, preferably working in the financial IT community. The position in the team is focused on delivering exceptional services to both BU and Dev partners to minimize/avoid any production outages. The role will focus on production support.",
//        "employment_type": "Internship",
//        "package_per_annum": "10 LPA"
//         }


const JobsCard = ({jobsItem})=> {
    return (
        <li className='p-3 rounded-lg shadow mb-4'>
            
            <div className='d-flex '>
                <img src = {jobsItem.company_logo_url} width="70px" />
                
                <div className='mr-1 ml-3'>
                    <h3>{jobsItem.title}</h3>
                    <FaStar className='mr-2' style={{ color: 'gold' }} />
                    <span> {jobsItem.rating}</span>
                </div>
            </div>

            <div className='d-flex justify-content-between align-items-center mt-2'>
                <FaLocationDot className='mr-1 ml-3'/>
                <span>{jobsItem.location}</span>
        
                <FaBriefcase className='mr-2'/>
                <span>{jobsItem.employment_type}</span>

                <h4>{jobsItem.package_per_annum}</h4>
            </div>
            <hr />

            <h4>Description</h4>
            <p>{jobsItem.job_description}</p>
        </li>
    )
}
export default JobsCard;