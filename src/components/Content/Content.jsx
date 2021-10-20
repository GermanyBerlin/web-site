import s from './Content.module.css'
import MyPosts from './MyPosts/MyPosts';
import Info from './Info/Info';


const Content = () => {
  return (
    <div className = 'content'>
      <Info />
      <MyPosts />
    </div>
  )
}

export default Content;