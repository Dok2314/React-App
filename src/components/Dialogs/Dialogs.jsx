import dialogsCss from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.dialogs
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name} key={dialog.id} />);

    let messagesElements = props.messages
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