import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Bar from './Bar'
import Item from './Item'
import FoundItem from './FoundItem'
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path="/item/:id" component={FoundItem}/>
      <Route path="/foo" component={Bar}/>
    </Switch>
  </main>
)

export default Main