import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Redirect from './pages/Redirect'

const Main = ()=> {
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/redirect' component={Redirect}></Route>
        </Switch>
    )
}

export default Main