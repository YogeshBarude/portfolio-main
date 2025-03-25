import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaMobileAlt} from "react-icons/fa";
import { BiRocket } from "react-icons/bi";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Yogesh Barude</strong>
        </h1>,
    titles: [
        "A Data Scientist",
        "A Generative AI Specialist",
        "An Indian"
    ],
    about: {
        start: "MBA in Big Data Analytics with a strong blend of technical expertise and business acumen." +
            " Passionate about transforming data into strategic business decisions, I excel at solving complex challenges, driving innovation, and leveraging AI to create tangible business impact.",
        exit: " Fluent in Python, Natural Language Processing, Machine Learning, Data Visualization, Cloud Computing, Advanced Excel, Generative AI, SQL, and more. " +
            " I combine data-driven decision-making, leadership, problem-solving, and stakeholder management to drive business success."
    },
    workTimeline: [
        {
            id: "work-5",
            title: "Master of Business Administration",
            company: "Goa Institute of Management [ 2024-26 ]",
            description: "Strategic decision-making, business analytics, leadership, and data-driven problem-solving." ,
            date: "2024",
            icon: <BsClipboardData/>,
            tags: ["Big Data Analytics", "Python", "SQL", "Machine Learning", "Business Acumen", "Business Intelligence" ,"Stakeholder Management", "Communication", "Critical Thinking"]
        },
        {
            id: "work-4",
            title: "ML Intern",
            company: "Feuchr-School of Excellence [ May – Jul 2022 ] ",
            description: "Advanced forecasting techniques, data-driven strategy execution, and customer-centric analytics." ,
            date: "2022",
            icon: <DiCodeigniter/>,
            tags: ["Python", "SQL", "Machine Learning", "Web Integration", "Business Intelligence" ,"Data Visualization"]
        },
        {
            id: "work-2",
            title: "Data Science Intern",
            company: "Exposys Data Labs [ Sept - Oct 2021]",
            description: "Advanced predictive modeling, machine learning optimization, and healthcare analytics for accurate diabetes prediction." ,
            date: "2023",
            icon: <DiCodeigniter/>,
            tags: ["Python", "SQL", "Data Preprocessing", "Machine Learning", "Model Evaluation" ,"Predictive Analytics", "Logistic Regression", "SVM"]
        },
        {
            id: "work-1",
            title: "IOT and Data Science Internship",
            company: "Entuple Technologies Pvt. Ltd [ Apr - Jun 2021 ]",
            description: `Skills Gained:
 Understanding of IoT systems and data processing.

 Hands-on experience with machine learning and cloud computing.
`,
            date: "2023",
            icon: <DiCodeigniter/>,
            tags: ["Python", "Raspberry pi", "HTML", "CSS", "IOT" ,"SQL","Cloud"]
            
        },
        {
            id: "work-0",
            title: "Bachelor of Technology",
            company: "KJ Somaiya Institute of technology , Mumbai.",
            description: "Scored 8.48 cgpa in the Electronics and telecommunication Branch.",
            date: "2019-2023",
            icon: <BsClipboardData/>,
            tags: ["Python", "Machine Learning", "Deep learning", "Image processing" ,"Computer networks", "SQL"]
            
        }
    ]
}


export default homeConfig