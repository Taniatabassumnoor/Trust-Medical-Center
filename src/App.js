import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';

import AuthProvider from './Pages/Contexts/AuthProvider';
import initializeAuthentication from './Pages/Firebase/firebase.initialize';
import Home from './Pages/Home/Home/Home';


import NotFound from './Pages/NotFound/NotFound';
import Pricing from './Pages/Pricing/Pricing';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Services from './Pages/Services/Services';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Shared/Login/Login';

import Shipping from './Pages/Shipping/Shipping';
import SingleService from './Pages/SingleService/SingleService';
initializeAuthentication();
function App() {
  return (
    <div className="App">
   <AuthProvider>
   <Router>
     <Header></Header>
     <Switch>
       <Route exact path="/"><Home></Home></Route>
       <Route exact path="/home"><Home></Home></Route>
       <Route exact path="/shipping"><Shipping></Shipping></Route>
       <Route exact path="/services"><Services></Services></Route>
       <Route exact path="/about"><About></About></Route>
       <Route exact path="/pricing"><Pricing></Pricing></Route>
       <PrivateRoute exact path="/singleservices/:id"><SingleService></SingleService></PrivateRoute>
       <PrivateRoute exact path="/appointment"><Appointment></Appointment></PrivateRoute>
       <Route path="/login"><Login></Login></Route>
       
       
       <Route  path="*"><NotFound></NotFound></Route>
     </Switch>
   </Router>
   </AuthProvider>
    </div>
  );
}

export default App;
