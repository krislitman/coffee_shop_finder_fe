import React from 'react'
import ZipcodeForm from './zipcodeForm'

class MainContent extends React.Component {
  render(){
    return(
      <React.Fragment>
      <hr></hr><br></br>
      <h3 align="center">Find Coffee Shops near you: </h3>
      <ZipcodeForm />
      </React.Fragment>
    )
  }
}

export default MainContent
