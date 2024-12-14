import AvatarName from "@/core/components/avatar/AvatarName";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-3 w-full min-h-16 bg-gray-900 border-b-[1px] border-gray-600">
      <div className="w-full container mx-auto flex justify-between items-center">
        <h1 className="text-white text-lg">Job Board</h1>
        <AvatarName name="Carlos" />
      </div>
    </nav>
  );
};

export default Navbar;
