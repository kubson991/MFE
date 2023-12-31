import { createBrowserHistory, createMemoryHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//Mount Function to Start APP
const mount = (el, { onNavigate,defaultHistory,initialPath }) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries:[initialPath]
  });
  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({pathname:nextPathname}){
        const {pathname}= history.location
        if (pathname != nextPathname) {
            history.push(nextPathname)
        }
    }
  }
};
//If we are in development and in isolation,
//call moun inmediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("_marketing-dev-root");
  if (devRoot) {
    mount(devRoot, {defaultHistory:createBrowserHistory()});
  }
}

// we are running throung container
//and we should export mount function

export { mount };

