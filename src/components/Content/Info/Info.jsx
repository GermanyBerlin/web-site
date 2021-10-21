import s from './Info.module.css'

const Info = (props) => {
  return(
    <div className={s.info}>
        <img src="https://static.turbosquid.com/Preview/2014/05/19__17_46_43/tguy1_headrender01+copy.jpgb9da1459-b9d8-4952-bca9-ed5f231c98c6Large.jpg"></img>
        <div className = {s.description}>description</div>
    </div>
  )
}

export default Info;