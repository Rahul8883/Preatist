import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Room from './component/Room';
import Login from './component/login';
/**
 * stateless functional component.
 * here, providing root path of the component.
 */
function App (){
    return (
      <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Room}></Route>
          <Route path="/login" exact component={Login}></Route>

          <Route component={NotFound}></Route>
          </Switch>
      </Router>
      </div>
    )
  }


/**
 * This function is use to  indication whenever any wrong path entered into the browser.
 */
  function NotFound(){
    return(
      <div>
        <h1>Page Not Found 404</h1>
      </div>
    )
  }

export default App
