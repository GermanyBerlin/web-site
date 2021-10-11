import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';

const App = () => {
  return (
    <div className="wrapper">
       <Header />
       <Navbar />
       <Content />
       <Footer />
    </div>
  );
}

export default App;
