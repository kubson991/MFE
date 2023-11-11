import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
//Mount Function to Start APP
const mount=(el)=>{
    ReactDOM.render(
        <App/>,el
    )
}
//If we are in development and in isolation, 
//call moun inmediately
if (process.env.NODE_ENV === 'development') {
    const devRoot=document.getElementById('_marketing-dev-root')
    if (devRoot) {
        mount(devRoot)   
    }
}

// we are running throung container
//and we should export mount function

export { mount }

