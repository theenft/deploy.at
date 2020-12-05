import React from 'react'
import { hydrate, render } from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css'
import { Main } from './main'

const rootElement = document.getElementById('root')
if (rootElement.hasChildNodes()) {
  hydrate(<Main />, rootElement)
} else {
  render(<Main />, rootElement)
}
