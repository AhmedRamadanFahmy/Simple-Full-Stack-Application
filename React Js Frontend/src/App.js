
import './App.css';
import List from './Components/ListEmployee'
import Header from './Components/Header';
import Footer from './Components/Footer';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import AddEmp from './Components/AddEmp';
import UpdatedEmp from './Components/UpdatedEmp';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />   
           <Switch>
              <Route path="/" exact component={List} />
              <Route path="/employee" component={List} /> 
              <Route path="/add-emp" component={AddEmp} />
              <Route path="/updateemp/:id" component={UpdatedEmp}></Route>
          </Switch>
        <Footer />
      </div>
    </Router>
  
  );
}

export default App;
