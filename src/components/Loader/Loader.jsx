import React from 'react'
import { DotWave } from '@uiball/loaders'
import './Loader.css'

const Loader = () => {
  return (
    <div className='loader'>
        <DotWave size={80} color="#018aff" />
        </div>
  )
}
export default Loader