import React from "react";
import LogInComponent from "../components/LogInComponent";
import SideBar from "../components/SideBar";
import CatelogItems from "../components/CatelogItems";

const Catelog: React.FC = () => {
  return (
    <div className="flex w-full h-full ">
      
      <div className="flex-grow">
        <CatelogItems />
      </div>
    </div>
  );
};

export default Catelog;
