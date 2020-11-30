import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 10},
                {id: 3, message: 'Blablabla', likesCount: 12},
                {id: 4, message: 'Dada', likesCount: 12},
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
        }
    }



export default store;
window.state = store;
