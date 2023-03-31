import headerCss from './Header.module.css';

const Header = () => {
    return (
        <header className={headerCss.header}>
            <img src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png" alt="Logo"/>
        </header>
    );
};

export default Header;