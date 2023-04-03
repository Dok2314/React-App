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
    let dialogs = [
        {id: 1, name: 'Daniil'},
        {id: 2, name: 'Oleg'},
        {id: 3, name: 'Nika'},
    ];

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra'},
        {id: 3, message: 'Yo'},
    ];

    let dialogsElements = dialogs
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name} />);

    let messagesElements = messages
        .map(m => <MessageItem id={m.id} message={m.message} />);

    return (
        <div className={dialogsCss.dialogs}>
            <div className={dialogsCss.dialogsItems}>
                { dialogsElements }
            </div>

            <div className={dialogsCss.messages}>
                { messagesElements }
            </div>
        </div>
    );
};

export default Dialogs;