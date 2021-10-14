import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://static.turbosquid.com/Preview/2014/05/19__17_46_43/tguy1_headrender01+copy.jpgb9da1459-b9d8-4952-bca9-ed5f231c98c6Large.jpg"></img>
      {props.message}
      <div>
        <span>Like</span> {props.likesCount}
      </div>
    </div>
  )
}

export default Post; 