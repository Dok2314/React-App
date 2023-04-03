import dialogsCss from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/Message";

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
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name} key={dialog.id} />);

    let messagesElements = messages
        .map(m => <MessageItem id={m.id} message={m.message} key={m.id} />);

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