import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount:12},
            {id: 2, message: 'It\'s my first post', likesCount:10},
            {id: 3, message: 'Blablabla', likesCount:12},
            {id: 4, message: 'Dada', likesCount:12},
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
        ]
    },
    siteBar: {}
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
export default state;