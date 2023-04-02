import dialogsCss from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={dialogsCss.dialog + ' ' + dialogsCss.active}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
};

const MessageItem = (props) => {
    return (
        <div className={dialogsCss.message}>{props.message}</div>
    );
};


const Dialogs = (props) => {
    return (
        <div className={dialogsCss.dialogs}>
            <div className={dialogsCss.dialogsItems}>
                <DialogItem id={1} name="Daniil" />
                <DialogItem id={2} name="Oleg" />
                <DialogItem id={3} name="Nika" />
            </div>

            <div className={dialogsCss.messages}>
                <MessageItem message='Hi' />
                <MessageItem message='How is your it-kamasutra' />
                <MessageItem message='Yo' />
            </div>
        </div>
    );
};

export default Dialogs;