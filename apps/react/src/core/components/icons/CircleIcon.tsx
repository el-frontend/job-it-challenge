import React from "react";
import "./circle-icon.css";

type Props = {
  icon: React.ReactNode;
};

const CircleIcon: React.FC<Props> = ({ icon }) => {
  return <div className="circle-icon flex flex-center">{icon}</div>;
};

export default CircleIcon;
