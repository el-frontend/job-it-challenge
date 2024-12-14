type AvatarProps = {
  name: string;
};

const AvatarName: React.FC<AvatarProps> = ({ name }) => {
  return (
    <div className="flex justify-center items-center h-10 w-10 bg-orange-300 rounded-full">
      <span>{name[0].toUpperCase()}</span>
    </div>
  );
};

export default AvatarName;
