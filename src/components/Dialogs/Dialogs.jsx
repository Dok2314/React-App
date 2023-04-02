import dialogsCss from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={dialogsCss.dialogs}>
            <div className={dialogsCss.dialogsItems}>
                <div className={dialogsCss.dialog + ' ' + dialogsCss.active}>
                    <NavLink to="/dialogs/1">Daniil</NavLink>
                </div>
                <div className={dialogsCss.dialog}>
                    <NavLink to="/dialogs/2">Dimych</NavLink>
                </div>
                <div className={dialogsCss.dialog}>
                    <NavLink to="/dialogs/3">Oleg</NavLink>
                </div>
            </div>
            <div className={dialogsCss.messages}>
                <div className={dialogsCss.message}>Hi</div>
                <div className={dialogsCss.message}>How is your it-kamasutra</div>
                <div className={dialogsCss.message}>Yo</div>
            </div>
        </div>
    );
};

export default Dialogs;