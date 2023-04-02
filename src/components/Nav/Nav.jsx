import navCss from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={navCss.nav}>
            <div className={`${navCss.item} ${navCss.active}`}>
                <a href="/profile">Profile</a>
            </div>
            <div className={navCss.item}>
                <a href="/dialogs">Messages</a>
            </div>
            <div className={navCss.item}>
                <a href="/news">News</a>
            </div>
            <div className={navCss.item}>
                <a href="/music">Music</a>
            </div>
            <div className={navCss.item}>
                <a href="/settings">Settings</a>
            </div>
        </nav>
    );
};

export default Nav;