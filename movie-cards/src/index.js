import './index.css'
import ReactDom from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro.js'

//const el = document.getElementById('root')
ReactDom.render(
    <div>
        <Primeiro />
    </div>,
    document.getElementById('root')
)