import s from './MyPosts.module.css';
import Post from './Posts/Post';
import React from 'react';

const MyPosts = (props) => {

  let postElements = props.posts.map(posts => <Post message={posts.message} likesCount={posts.likesCount} />)

  let newPostEltmtnt = React.createRef(); 
  let addPost = () => {
    let post = newPostEltmtnt.current.value;
    alert(post);
  }

  return (
    <div className={s.myPosts}>
      <h3>Мой записи</h3>
      <div>
        <div className={s.txt}>
          <textarea ref={newPostEltmtnt}></textarea>
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