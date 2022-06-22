import './Normalize.css';
import "./App.scss";
import Header from "./components/header/Header";
import HomeView from 'views/HomeView/HomeView';
import Footer from 'components/footer/Footer';
import MessageBar from 'components/messageBar/MessageBar';
import { Provider } from "react-redux";
import store from 'store';

const App = () => {
  let  messageBarOpen = true;
  return (

      <Provider store={store} >
      <MessageBar />
      <Header />
       <main  className={(messageBarOpen) ? "messageBarOpen": "messageBarClosed" } >
        <HomeView />
        <Footer />
      </main>
      </Provider>
  );
}

export default App;
