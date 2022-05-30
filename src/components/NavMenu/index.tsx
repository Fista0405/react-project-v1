import { NavItem } from "models/generic.model";
import { NavLink } from "react-router-dom";
import "./index.scss";

const NavMenu = ({ className = "", items }: Props) => {
  const content = items.map(({ name, path }) => (
    <NavLink key={name} to={path}>
      {name}
    </NavLink>
  ));

  return <nav className={`nav-menu ${className}`}>{content}</nav>;
};

type Props = {
  items: NavItem[];
  className?: string;
};

export default NavMenu;
