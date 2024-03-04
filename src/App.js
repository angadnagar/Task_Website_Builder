
import ContentBar from './Components/ContentBar';
import Deals from './Components/Deals';
import Footer from './Components/Footer';
import { Navbar } from './Components/Navbar';
import SignUp from './Components/SignUp';
import TopBar from './Components/TopBar';
import "./app.css";



function App() {
  return (
    <div className="Container">
      
      <Navbar/>
      <div className='innerContainer'>
      <TopBar/>
      <ContentBar/>
      <Deals/>
      <SignUp/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
