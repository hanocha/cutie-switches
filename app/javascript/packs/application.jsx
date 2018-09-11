import React from 'react'
import ReactDOM from 'react-dom'
import { List } from '../src/components/pages/Switch/list';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <List switches={[1, 2, 3]} />,
    document.body.appendChild(document.createElement('div')),
  )
})
