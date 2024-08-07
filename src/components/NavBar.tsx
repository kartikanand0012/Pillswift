import ToggleTheme from "./ToggleTheme";
import { NavLink } from "react-router-dom";
import type { FunctionComponent } from "react";
import { routes } from "../config/routes.config";
import pillSwiftIcon1 from "../assets/img/pillSwiftIcon1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar: FunctionComponent = () => (
  <nav role="navigation" className="navbar" aria-label="Main navigation">
    <div className="navbar-wrapper">
      <div className="brand-wrapper">
        <img
          src={pillSwiftIcon1}
          alt="PillSwift"
          role="img"
          height="100"
          width="250"
          aria-hidden="true"
          title="PillSwift"
        />
      </div>
      <div className="navbar-routes">
        {routes.map(({ path, name }) => (
          <NavLink
            end
            to={path}
            key={path}
            className={({ isActive }) =>
              "navbar-item" + (isActive ? " is-active" : "")
            }
          >
            <span>{name}</span>
          </NavLink>
        ))}
        <div className="seperator" />
        <a
          target="_blank"
          aria-label="GitHub"
          className="navbar-item"
          rel="noopener noreferrer"
          href="https://github.com/kartikanand0012"
        >
          <span>Signup</span>
          <FontAwesomeIcon icon="external-link-alt" />
        </a>
        <div className="navbar-theme-toggle">
          <ToggleTheme />
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
