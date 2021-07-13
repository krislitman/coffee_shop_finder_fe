import React from 'react'
import ZipcodeForm from './zipcodeForm'

class MainContent extends React.Component {
  render(){
    return(
      <React.Fragment>
        <hr></hr><br></br>

        <h3 align="center">Find Coffee Shops near you: </h3>

        <ZipcodeForm />

        {/* <div align="center" >
          <input type="text" placeholder="Enter your zipcode" id="location" />
        <br></br><br></br>
          <button type="submit" id="submit">Find Coffee Shops</button>
        </div>

        <br></br> */}
      </React.Fragment>
    )
  }
}

export default MainContent
