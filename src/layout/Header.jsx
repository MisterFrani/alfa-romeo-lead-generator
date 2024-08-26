import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#161821] h-[70px] flex items-center justify-center z-50">
      <div className="container mx-auto px-4 flex justify-center">
        <img src={logo} alt="Logo Alfa Romeo " className="h-[50px] w-auto" />
      </div>
    </header>
  );
};

export default Header;
