import React from "react";

type Props = {
  icon: React.ReactNode;
};

const CircleIcon: React.FC<Props> = ({ icon }) => {
  return (
    <div className="flex justify-center items-center p-2 w-10 h-10 rounded-full border border-white">
      {icon}
    </div>
  );
};

export default CircleIcon;
