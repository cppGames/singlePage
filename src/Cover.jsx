import React, { Suspense, lazy } from 'react'
import Preloader from './components/preloader/Preloader'

const App = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./App')), 300)
  })
})


const  Cover = () => {
  return(
      <Suspense fallback={ <Preloader/> }>
        <App />
      </Suspense>
  )
}


export default Cover
