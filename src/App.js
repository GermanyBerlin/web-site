import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, Link } from "react-router-dom";



const App = (props) => {
  return (
      <div className='wrapper'>
        <Header />
        <Navbar />
        <div className='wrapper-content'>
          <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage} />} />
          <Route path="/content" render={() => <Content state={props.state.contentPage}/>} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
        <Footer />
      </div>
  );
}

export default App;
