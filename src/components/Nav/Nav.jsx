import navCss from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={navCss.nav}>
            <div className={navCss.item}>
                <NavLink to="/profile" className={navData => navData.isActive ? navCss.activeLink : navCss.item}>Profile</NavLink>
            </div>
            <div className={navCss.item}>
                <NavLink to="/dialogs" className={navData => navData.isActive ? navCss.activeLink : navCss.item}>Messages</NavLink>
            </div>
            <div className={navCss.item}>
                <NavLink to="/news" className={navData => navData.isActive ? navCss.activeLink : navCss.item}>News</NavLink>
            </div>
            <div className={navCss.item}>
                <NavLink to="/music" className={navData => navData.isActive ? navCss.activeLink : navCss.item}>Music</NavLink>
            </div>
            <div className={navCss.item}>
                <NavLink to="/settings" className={navData => navData.isActive ? navCss.activeLink : navCss.item}>Settings</NavLink>
            </div>
        </nav>
    );
};

export default Nav;