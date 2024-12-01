import "./avatar.css";

type AvatarProps = {
  name: string;
};

const AvatarName: React.FC<AvatarProps> = ({ name }) => {
  return <div className="avatar-name">{name[0].toUpperCase()}</div>;
};

export default AvatarName;
