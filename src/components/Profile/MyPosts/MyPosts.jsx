import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name = "newPostText" component = "textarea"/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form:"ProfileAddNewPostForm"})(AddNewPostForm);

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCounter={p.likesCount}
                                   deletePost={props.deletePost}/>)

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit = {onAddPost}/>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}



export default MyPosts;