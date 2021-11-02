import s from './Content.module.css'
import MyPosts from './MyPosts/MyPosts';
import Info from './Info/Info';


const Content = (props) => {
  return (
    <div className={s.content}>
      <Info />
      <MyPosts
        posts={props.contentPage.posts}
        newPosts={props.contentPage.newPosts} 
        dispatch={props.dispatch}
      />
    </div>
  )
}

export default Content;