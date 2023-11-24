import { StylesProvider, generateClassName } from '@material-ui/core/styles'
import { createBrowserHistory } from 'history'
import React, { Suspense, lazy, useEffect, useState } from 'react'
import { Redirect, Route, Router, Switch } from 'react-router-dom'
import Header from './components/Header'

const MarketingLazy=lazy(()=> import('./components/MarketingApp'))
const AuthLazy=lazy(()=> import('./components/AuthApp'))
const DashboardLazy=lazy(()=> import('./components/DashboardApp'))

const history=createBrowserHistory()

export default ()=>{
    const [isSignedIn,setIsSignedIn] = useState(false)

    useEffect(() => {
        if (isSignedIn) {
            history.push('/dashboard')
        }
      return () => {

      }
    }, [isSignedIn])
    

    return <div>
        <Router history={history}>
        <StylesProvider generateClassName={generateClassName}>
            <main>
                <Header onSignOut={()=> setIsSignedIn(false)} isSignedIn={isSignedIn}/>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path="/auth">
                            <AuthLazy onSignIn={()=> setIsSignedIn(true)}/>
                        </Route>
                        <Route path="/auth/xd">
                            <p>XDDD</p>
                        </Route>
                        <Route path="/xd">
                            <Route path="/xd"></Route>
                        </Route>
                        <Route path="/dashboard">
                            {!isSignedIn && <Redirect to="/"/>}
                            <DashboardLazy />
                        </Route>
                        <Route path="/" component={MarketingLazy}></Route>
                    </Switch>
                </Suspense>
            </main>
            </StylesProvider>
        </Router>
    </div>
}