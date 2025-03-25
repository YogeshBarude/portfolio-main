import {
    SiPython,
    SiPostgresql,
    SiMicrosoftsqlserver,
    SiDocker,
    SiMicrosoftazure,
    SiRedis,
    SiReact,
    SiJavascript,
    SiCss3,
    SiHtml5,
    SiWindowsterminal,
    SiSnowflake,
    SiApacheairflow,
    SiApachekafka,
    SiPowerbi
} from "react-icons/si";
import {GrMysql} from "react-icons/gr";
import {FaGitAlt} from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { IoLogoTableau } from "react-icons/io5";
import { SiOracle } from "react-icons/si";
import { SiRstudioide } from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";

import React from "react";

const skillsConfig = {
    mainSkills: [
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <SiPython size={50}/>,
            text: "Python"
        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <SiPowerbi size ={50}/>,
            text: "PowerBi"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <IoLogoTableau  size={50}/>,
            text: "Tableau"
        },
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <SiRstudioide size={50} />,
            text: "R Studio"
        },
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <SiOracle  size={50}/>,
            text: "Oracle Database"
        },
       
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <GrMysql size={50}/>,
            text: "MySQL"
        },
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <SiDocker size={50}/>,
            text: "Docker"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <FaAws  size={50}/>,
            text: "Aws"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <FaGitAlt size={50}/>,
            text: "Git"
        }
    ],
    complementarySkills: [
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <FaMicrosoft  size={50}/>,
           text: "Microsoft Office"
        },
        {
            
            id: "skills-2",
            className: "skill-icon",
            icon: <SiMicrosoftsqlserver size={50}/>,
            text: "MSSQL"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <SiWindowsterminal size={50}/>,
            text: "Bash"
        },
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <SiSnowflake size={50}/>,
            text: "Snowflake"
        },
        {
            id: "skills-11",
            className: "skill-icon",
            icon: <SiCss3 size={50}/>,
            text: "CSS 3"
        },
        {
            id: "skills-12",
            className: "skill-icon",
            icon: <SiHtml5 size={50}/>,
            text: "HTML 5"
        },
        {
            id: "skills-14",
            className: "skill-icon",
            icon: <SiApachekafka size={50}/>,
            text: "Kafka"
        }
        
    ]
}

export default skillsConfig
