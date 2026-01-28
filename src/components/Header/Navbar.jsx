import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faDiagramProject,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import { navItems } from "./navItems";
import Clock from "./Clock";

const iconMap = {
  "icon-home": faHome,
  "icon-projects": faDiagramProject,
  "icon-contact": faAddressCard,
};

const Navbar = () => {
  return (
    <nav>
      <ul className="flex space-x-6 p-4">
        {navItems.map((item) => (
          <div className="inline-block space-x-4 text-2xl text-cyan-700">
            <li key={item.path}>
              <Link to={item.path}>
                <FontAwesomeIcon
                  icon={iconMap[item.icon]}
                  className="hover:text-cyan-500 transition duration-300"
                />
              </Link>
            </li>
          </div>
        ))}
        <li className="position absolute right-4 top-4">
          <Clock />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
