import React, { lazy, Suspense, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'

const MarketingLazy=lazy(()=> import('./components/MarketingApp'))
const AuthLazy=lazy(()=> import('./components/AuthApp'))

export default ()=>{

    const [isSignedIn,setIsSignedIn] = useState(false)

    return <div>
        <BrowserRouter>
            <main>
                <Header onSignOut={()=> setIsSignedIn(false)} isSignedIn={isSignedIn}/>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path="/auth" component={AuthLazy}>
                            <AuthLazy onSignIn={()=> setIsSignedIn(true)}/>
                        </Route>
                        <Route path="/" component={MarketingLazy}></Route>
                    </Switch>
                </Suspense>
            </main>
        </BrowserRouter>
    </div>
}