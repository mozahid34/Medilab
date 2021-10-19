import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Appoint from './component/Appoint/Appoint';
import Contact from './component/Contact/Contact';
import Details from './component/Details/Details';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Notfound from './component/Notfound/Notfound';
import Reg from './component/Reg/Reg';
import Video from './component/Video/Video';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header> 
      <br /> <br /> <br /> <br />
      <Switch>
        <Route exact path= "/">
          <Home></Home>

        </Route>

        <Route path = "/home">
          <Home></Home>
        </Route>
        <Route path = "/doc">
          <Video></Video>
        </Route>
        
        <Route path = "/appoint">
          <Appoint></Appoint>
        </Route>
        <Route path = "/contact">
          <Contact></Contact>
        </Route>
        <Route path = "/login">
          <Login></Login>
        </Route>
        <Route path = "/reg">
          <Reg></Reg>
        </Route>
        <Route path = "/details">
          <Details></Details>
        </Route>
        <Route exact path = "*">
          <Notfound></Notfound>
        </Route>

      

      </Switch>
      </BrowserRouter>
      <br /> <br /> <br /> <br />
    <Footer></Footer>
    </div>
  );
}

export default App;
