import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import Signin from './components/Signin'
import Signup from './components/Signup'

const CreateGenerateClassName = createGenerateClassName({
    productionPrefix:'au'
})

export default ({history,onSignIn})=>{
    return <div>
        <StylesProvider generateClassName={CreateGenerateClassName}>
            <Router history={history}>
                <Switch>      
                    <Route path="/auth/signin"><p>xd</p>
                        <Signin onSignIn={onSignIn}/>
                    </Route>
                    <Route path="/auth/signup" component={Signup}>
                        <Signup onSignIn={onSignIn}/>
                    </Route>
                </Switch>
            </Router>
        </StylesProvider>
    </div>
}