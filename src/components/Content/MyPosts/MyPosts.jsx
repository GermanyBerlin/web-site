import s from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = () => {

  let posts = [
    {id: '1', message: 'Hello', likesCount: '0'},
    {id: '2', message: 'Hello, my friend', likesCount: '21'}
  ]

  let postElements = posts.map(posts => <Post message={posts.message} likesCount={posts.likesCount} />)

  return (
    <div className={s.myPosts}>
      <h3>Мой пост</h3>
      <div>
        <div className={s.txt}>
          <textarea></textarea>
        </div>
        <div className={s.btn}>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts;