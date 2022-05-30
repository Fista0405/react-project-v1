import "./index.scss";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import NavMenu from "../NavMenu";
import UserComponent from "components/List";

const Header = () => {
  const navItems = [
    { name: "About", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Information", path: "/info" },
  ];

  const userInformation = [
    { firstName: "Frane", lastName: "Lab" },
    { firstName: "Lu", lastName: "Rom" },
  ];

  return (
    <>
      <NavMenu items={navItems}></NavMenu>
      <header>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" />
          <Route path="/projects" />
        </Routes>
      </header>
      <main>
        <UserComponent users={userInformation}></UserComponent>
      </main>
    </>
  );
};

export default Header;
