import React, {Component} from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name = "newPostText" component = {Textarea} placeholder = {"Post message"}
                       validate = {[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form:"ProfileAddNewPostForm"})(AddNewPostForm);

const MyPosts = React.memo(props => {

        let postsElements =
            props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCounter={p.likesCount}
                                       deletePost={props.deletePost}/>)

        let onAddPost = (values) => {
            props.addPost(values.newPostText);
        }

        return (
            <div className={classes.postsBlock}>
                <h3>My posts</h3>
                <AddNewPostFormRedux onSubmit={onAddPost}/>
                <div className={classes.posts}>
                    {postsElements}
                </div>
            </div>
        )
})



export default MyPosts;