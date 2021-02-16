import React from 'react'
import {InertiaApp} from '@inertiajs/inertia-react'
import ReactDOM from 'react-dom'
import {InertiaProgress} from '@inertiajs/progress'
import './bootstrap'

InertiaProgress.init()

const el = document.getElementById('app')
ReactDOM.render(
  <InertiaApp
    initialPage={JSON.parse(el?.dataset?.page || '')}
    resolveComponent={(name) =>
      import(`./src/Pages/${name}`).then((module) => module.default)
    }
  />,
  el,
)
