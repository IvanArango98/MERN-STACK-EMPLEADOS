import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Login from '../login'

export default function AppRouter()
{
    return(
            <Router>
                <Switch>
                    <Route exact path={["/","/login"]} component={Login}/>
                    <Route  path="*" component={() => <h1 style={{marginTop:200}}>404 <br/>Página no Encontrada</h1>}/>
                </Switch>                
            </Router>


    );
}



