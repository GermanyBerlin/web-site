import s from './Content.module.css'
import MyPosts from './MyPosts/MyPosts';
import Info from './Info/Info';


const Content = (props) => {
  return (
    <div className = 'content'>
      <Info />
      <MyPosts posts={props.state.posts}/>
    </div>
  )
}

export default Content;