import React from 'react'
import App from './App'
import {Route, Switch} from 'react-router-dom'

const Bremo = () => {
    return (
        <>
         <Switch>
             <Route exact path="/" component={App}/>
             <Route exact path="/Reminders" component={App}/>
             <Route exact path="/Archive" component={App}/>
             <Route exact path="/Trash" component={App}/>
             <Route exact path="/Linkpad" component={App}/>
         </Switch>
        </>
    )
}

export default Bremo;