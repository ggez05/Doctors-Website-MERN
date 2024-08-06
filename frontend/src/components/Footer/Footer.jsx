import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const socialLinks = [
  {
    path: "https://github.com/ggez05",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/",
    display: "Services",
  },
  {
    path: "/",
    display: "Blog",
  },
];

const quickLinks02 = [
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/",
    display: "Request an Appoinment",
  },
  {
    path: "/",
    display: "Find a Location",
  },
  {
    path: "/",
    display: "Get a Doctor's opinion",
  },
];

const quickLinks03 = [
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/",
    display: "Contact us",
  },
];

const Footer = () => {
  const year = new Date().getFullYear(); // You'll need to define the 'year' variable.

  return (
    <footer className="pb-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img width={"250px"} height={"250px"} src={logo} alt="" />
            <p className="text-[16px] leading-7 font-400 text-textColor mt-4">
              Copyright &copy; {year} developed by Garvit Bhatia.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 border-solid border-[#181A1E] rounded-full flex
                  items-center justify-center group hover:bg-[#343f76] hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-black">
              Quick Links
            </h2>
            {quickLinks01.map((item, index) => (
              <li key={index} className="mb-4">
                <Link
                  to={item.path}
                  className="text-[16px] leading-7 font[400] text-textColor"
                >
                  {item.display}
                </Link>
              </li>
            ))}
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-black">
              I want to:
            </h2>
            {quickLinks02.map((item, index) => (
              <li key={index} className="mb-4">
                <Link
                  to={item.path}
                  className="text-[16px] leading-7 font[400] text-textColor"
                >
                  {item.display}
                </Link>
              </li>
            ))}
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-black">
              Support
            </h2>
            {quickLinks03.map((item, index) => (
              <li key={index} className="mb-4">
                <Link
                  to={item.path}
                  className="text-[16px] leading-7 font[400] text-textColor"
                >
                  {item.display}
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
