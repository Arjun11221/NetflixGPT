import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

const Footer = () => {
  return (
    <div className="bg-black flex justify-around  w-screen text-slate-50 p-10  ">
      <h1 className="font-semibold text-lg">Created By @Arjun</h1>
      <div  className=" w-1/12 flex justify-evenly">
        <a
          href="https://www.linkedin.com/in/arjun-kumar-03a187279/"
          target="blank"
        >
          <FontAwesomeIcon
            className="text-4xl "
            icon={icon({ name: "linkedin", style: "brands" })}
          />
        </a>
        <a href="https://github.com/Arjun11221" target="blank">
          <FontAwesomeIcon
            className="text-4xl"
            icon={icon({ name: "github", style: "brands" })}
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
