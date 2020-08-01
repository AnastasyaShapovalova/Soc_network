import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={classes.posts}>
                <Post message = "Hi, how are you? " likesCounter = '0' />
                <Post message="It's my first post" likesCounter = '23'/>
            </div>
        </div>
    )
}

export default MyPosts;