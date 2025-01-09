import logo from "../assets/logo.jpg";

const Nav = () => {
  return (
    <nav className="max-w-96 w-96 flex items-center  bg-mindaro">
      <img src={logo} alt="logo" className="w-20 rounded-full" />
      <div className="w-full flex">
        <div className="w-full flex justify-evenly">
          <p>Home</p>
          <p>Menú</p>
          <p>Contacto</p>
        </div>
        <div className=" w-auto flex">
          <p>search</p>
          <p className="ml-5">cart</p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
