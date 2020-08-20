const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Darova'},
        {id: 4, message: 'Darova'},
        {id: 5, message: 'Darova'}
    ],
    dialogs: [
    {id: 1, name: 'Nastya'},
    {id: 2, name: 'Oleg'},
    {id: 3, name: 'Pasha'},
    {id: 4, name: 'Anya'},
    {id: 5, name: 'Sveta'},
    {id: 6, name: 'Diana'}
],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body =  state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push( {id: 6, message: body});
            return state;
        default:
            return state;
    }
}

export const  sendMessageCreator = () => ({type: SEND_MESSAGE})
export const  updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default dialogsReducer;