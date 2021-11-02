import s from './MyPosts.module.css';
import Post from './Posts/Post';
import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/state';

const MyPosts = (props) => {

  let postElements = props.posts.map(posts => <Post message={posts.message} likesCount={posts.likesCount} />)

  let newPostElement = React.createRef(); 
  
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
     let post = newPostElement.current.value;
     let action = updateNewPostActionCreator(post);
     props.dispatch(action);
  }

  return (
    <div className={s.myPosts}>
      <h3>Мой записи</h3>
      <div>
        <div className={s.txt}>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPosts}/>
        </div>
        <div className={s.btn}>
          <button onClick={addPost}>Добавить запись</button>
        </div>
      </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts;