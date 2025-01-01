import AvatarName from "@/core/components/avatar/AvatarName";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-3 w-full min-h-16 bg-gray-900 border-b-[1px] border-gray-600">
      <div className="w-full container mx-auto flex justify-between items-center">
        <div className="flex gap-2 justify-center items-center">
          <img src="/images/logo.svg" alt="Job in IT" className="w-8 h-8" />
          <h1 className="text-white text-lg">Job in IT</h1>
        </div>
        <AvatarName name="Carlos" />
      </div>
    </nav>
  );
};

export default Navbar;
