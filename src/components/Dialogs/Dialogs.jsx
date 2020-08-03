import React from "react";
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return(
        <div className = {classes.dialog + ' ' + classes.active}>
            <NavLink to = {path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return(
        <div className = {classes.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Nastya'},
        {id: 2, name: 'Oleg'},
        {id: 3, name: 'Pasha'},
        {id: 4, name: 'Anya'},
        {id: 5, name: 'Sveta'},
        {id: 6, name: 'Diana'}
]
    let messages= [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Darova'},
        {id: 4, message: 'Darova'},
        {id: 5, message: 'Darova'}
    ]

    let dialogsElements = dialogs
        .map( d => <DialogItem name = {d.name} id = {d.id}/>);
    let messagesElements = messages
        .map (m =>  <Message message = {m.message}/>);


    return (
        <div className = {classes.dialogs}>
            <div className = {classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className = {classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;