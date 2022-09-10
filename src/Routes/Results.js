import React from 'react'

import './Results.css'

const Results = (props) => {
  return (
    <div className={'results-container'}>
      <div className={'main-row-container'}>
        <img
        src={require("../Assets/images/logo.png")}
          className={'image'}
        />
        <span className={'main-text'}>Friender</span>
      </div>

      <span className={'secondary-text'}>YOU WILL MEET</span>
      <br></br>
      <span className={'secondary-name-text'}>SHAMSUDEEN ROY</span>
      <br></br>
      <span className={'secondary-text'}>AT</span>
      <br></br>
      <span className={'secondary-name-text'}>CCIS</span>



    </div>
  )
}

export default Results