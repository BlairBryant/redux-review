import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home'
import TextChange from './Components/TextChange'
import Counter from './Components/Counter'

export default (
    <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/counter' component={Counter}/>
        <Route path='/textchange' component={TextChange}/>
    </Switch>
)