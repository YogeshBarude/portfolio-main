import React from "react";

import { AiFillCode, AiFillHome, AiOutlineGithub, AiOutlineUser, AiOutlineBook, AiOutlineTool } from "react-icons/ai";

import { BsMedium } from "react-icons/bs";

const menuConfig = {
  sidebarData: [
    {
      id: "menu-1",
      title: "Experience",
      path: "/portfolio-main#experience",
      icon: <AiOutlineUser size={20} />,
      className: "nav-text",
    },
    {
      id: "menu-2",
      title: "Projects",
      path: "/projects",
      icon: <AiOutlineGithub size={20} />,
      className: "nav-text",
    },
    {
      id: "menu-3",
      title: "Skills",
      path: "/skills",
      icon: <AiOutlineTool size={20} />,
      className: "nav-text",
    },
    {
      id: "menu-4",
      title: "Blogs",
      path: "/blogs",
      icon: <BsMedium size={20} />,
      className: "nav-text",
    },
  ],
};

export default menuConfig;
