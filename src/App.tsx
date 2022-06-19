import './Normalize.css';
import "./App.scss";
import Header from "./components/header/Header";
import HomeView from 'views/HomeView/HomeView';
import Footer from 'components/footer/Footer';
import Disclaimer from 'components/disclaimer/Disclaimer';

const App = () => {
  let  disclaimerOpen = true;
  return (
    <>
      <Disclaimer />
      <Header />
       <main  className={(disclaimerOpen) ? "disclaimerOpen": "disclaimerClosed" } >
        <HomeView />
        <Footer />
      </main>
    </>
  );
}

export default App;
