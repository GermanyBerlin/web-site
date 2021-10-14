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



const App = () => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <Navbar />
        <div className='wrapper-content'>
          <Route path = "/dialogs" component = {Dialogs} />
          <Route path = "/content" component = {Content} />
          <Route path = "/news" component = {News} />
          <Route path = "/music" component = {Music} />
          <Route path = "/settings" component = {Settings} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
