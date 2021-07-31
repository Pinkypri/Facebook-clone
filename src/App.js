import React from 'react'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Home from "./Pages/Home"
import {Provider} from "react-redux"
import {createStore} from "redux"
import {userReducer} from "./store/reducers/user"
import "./App.css"

const store=createStore(userReducer);
const App = () => {
 
  return (
 <Provider store={store}>  
   <Router>
     <Switch>
       <Route path="/" exact component={Home} />
     </Switch>
   </Router>
   </Provider> 
  )
}

export default App
