import s from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = () => {
  return (
    <div>
      MyPosts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message = 'Hello' likesCount = '0'/>
        <Post message = 'Hello, my friend' likesCount = '20'/>
        {/* <Post /> */}
      </div>

    </div>
  )
}

export default MyPosts;