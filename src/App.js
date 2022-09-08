import logo from './logo.svg';
import './App.css';
import Background from './components/background';
import ResponsiveAppBar from './components/appbar';
import Loader from './components/loading';
import Cards from './components/cards';
import Quotes from './components/quotes';
import LinkCards from './components/linkCards';
import Demo from './components/request';
import Stepper1 from './components/stepper';
import FooterContainer from './components/footercontainer';
import MapContainer from './components/gmap';
import KommunicateChat from './components/chat';
import Applicationform from './components/applicationform';

function App() {
  return (
    <div className="App">
      <KommunicateChat/>
      <ResponsiveAppBar/>
      <Background/>
      <Applicationform/>
      <Cards/>
      <Stepper1/>
      <Quotes/>
      <LinkCards/>
      <Demo/>
      <MapContainer/>
      <FooterContainer/>
      
    </div>
  );
}

export default App;
