import './App.css';
import AboutProduct from './components/aboutProduct/AboutProduct';
import Header from './components/header/Header';
import Cashback from './components/cashback/Cashback';

import contentData from './assets/data/contantData'
import { secondContentData } from './assets/data/contantData';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutProduct data={contentData} />
      <Cashback />
      <AboutProduct data={secondContentData} />
      <Footer />
    </div>
  );
}

export default App;
