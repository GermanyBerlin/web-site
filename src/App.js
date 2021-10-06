import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Content from './components/Content';

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
