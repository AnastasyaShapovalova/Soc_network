import React from "react";
import styles from  "./users.module.css";

let Users = (props) => {

    if(props.users.length ===0){
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://stuki-druki.com/aforizms/Anastasiya-Zadorozhnaya-01.jpg',
                    followed: false,
                    fullName: 'Anastasya',
                    status: 'It`s my life',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://stuki-druki.com/aforizms/Anastasiya-Zadorozhnaya-01.jpg',
                    followed: true,
                    fullName: 'Oleg',
                    status: 'I am a boss',
                    location: {city: 'Moscow', country: 'Russia'}},
                {
                    id: 3,
                    photoUrl: 'https://stuki-druki.com/aforizms/Anastasiya-Zadorozhnaya-01.jpg',
                    followed: false,
                    fullName: 'Pasha',
                    status: 'I am a boss too',
                    location: {city: 'Kiev', country: 'Ukraine'}
                }
            ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ?  <button onClick={ () =>{props.unfollow(u.id) }} >Unfollow</button>
                            :  <button onClick={ () =>{props.follow(u.id) }}>follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;