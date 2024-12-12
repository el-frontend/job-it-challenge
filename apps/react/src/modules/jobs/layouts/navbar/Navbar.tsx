import AvatarName from "@/core/components/avatar/AvatarName";
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1 className="">Job Board</h1>
      </div>
      <div className="navbar-user-actions">
        <AvatarName name="Carlos" />
      </div>
    </nav>
  );
};

export default Navbar;
