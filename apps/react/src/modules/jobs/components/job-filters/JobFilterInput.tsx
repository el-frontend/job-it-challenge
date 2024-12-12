import Divider from "@/core/components/divider/Divider";
import CircleIcon from "@/core/components/icons/CircleIcon";

type Props = {
  icon: React.ReactNode;
  children: React.ReactNode;
};

const JobFilterInput: React.FC<Props> = ({ children, icon }) => {
  return (
    <div className="flex gap-2 flex-center">
      <CircleIcon icon={icon} />
      {children}
      <Divider />
    </div>
  );
};

export default JobFilterInput;
