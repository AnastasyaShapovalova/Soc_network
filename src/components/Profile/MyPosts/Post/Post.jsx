import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    const onDeletePost = () => {
        props.deletePost(props.id)
    }
    return (

        <div className={classes.item}>
            <img src='https://i.ytimg.com/vi/48jatw-mm9s/maxresdefault.jpg'></img>
                        {props.message}
                        <span onClick={onDeletePost}>X</span>
            <div>
                <span>Like</span> {props.likesCounter}
            </div>
        </div>
    )
}

export default Post;