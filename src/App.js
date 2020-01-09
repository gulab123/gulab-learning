import React, { Component } from 'react'
import MyNavbar from './comman/navbar'
import HomeApp from './pages/Home'
import AboutApp from './pages/About'
import StatApp from "./pages/Statement"
import MountingApp from './pages/Mounting'
import MyfunctionApp from './pages/Myfunction'
import AppRedux from './pages/ReduxApp'
import{BrowserRouter, Route, Switch} from 'react-router-dom'
export default class Myapp extends Component {
    render() {
        return (
           <React.Fragment>        
               
               <BrowserRouter>
               <MyNavbar />
               <Switch>
               <Route path="/" exact component={HomeApp} />
                   <Route path="/AboutApp" component={AboutApp} />
                   <Route path="/MyfunctionApp" component={MyfunctionApp} />
                   <Route path="/StatApp" component={StatApp} />
                   <Route path="/MountingApp" component={MountingApp} />
                   <Route path="/AppRedux" component={AppRedux} />
               </Switch>
               </BrowserRouter>
               
           </React.Fragment>
        )
    }
}
