import './App.css';
// import AboutPage from './containers/HomeTemplate/AboutPage';
// import HomePage from './containers/HomeTemplate/HomePage';
// import ListMoviePage from './containers/HomeTemplate/ListMoviePage';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from './containers/PageNotFound';
// import Navbar from './containers/HomeTemplate/_components/Navbar';
// import NavbarAdmin from './containers/AdminTemplate/_components/Navbar';
import {routesAdmin, routesHome} from "./routes";
import HomeTemplate from './containers/HomeTemplate';
import AdminTemplate from './containers/AdminTemplate';

function App() {

  const renderLayoutHome = (routes) => {
    return routes?.map((item, index)=>{
      return <HomeTemplate key={index} exact={item.exact} path={item.path} Component={item.component}/>
    })
  }

  const renderLayoutAdmin = (routes) => {
    return routes?.map((item, index)=>{
      return <AdminTemplate key={index} exact={item.exact} path={item.path} Component={item.component}/>
    })
  } 

  return (
    <BrowserRouter>
      {/* <HomePage />
      <AboutPage />
      <ListMoviePage /> */}
      {/* <Navbar/>
      <NavbarAdmin/> */}
      <Switch>
        {/* <Route exact path="/" component={HomePage} />

        <Route path="/about" component={AboutPage} />

        <Route path="/list-movie" component={ListMoviePage} /> */}
        {renderLayoutHome(routesHome)}
        {renderLayoutAdmin(routesAdmin)}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
