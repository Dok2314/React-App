import navCss from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={navCss.nav}>
            <div className={`${navCss.item} ${navCss.active}`}>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className={navCss.item}>
                <NavLink to="/dialogs">Messages</NavLink>
            </div>
            <div className={navCss.item}>
                <NavLink to="/news">News</NavLink>
            </div>
            <div className={navCss.item}>
                <NavLink to="/music">Music</NavLink>
            </div>
            <div className={navCss.item}>
                <NavLink to="/settings">Settings</NavLink>
            </div>
        </nav>
    );
};

export default Nav;