import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { App } from '../src/components/pages/App';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})
