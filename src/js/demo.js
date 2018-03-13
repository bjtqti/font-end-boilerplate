 
import '../css/demo.styl'
import './meta'
import React from "react"
import ReactDOM from "react-dom"
import Index from './index.jsx'


if (module.hot) {
    module.hot.accept()
}

const initialState = {};
ReactDOM.render(
    <Index initialState={initialState} />,
    document.getElementById('app'))
  
 