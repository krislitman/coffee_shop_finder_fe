import React from 'react'

class ZipcodeForm extends React.Component {
  render() {
    return (
      <React.Fragment>
        <form align="center">
          <label for='zipcode'>Enter your zipcode:</label><br></br>
          <input type='text' id='zipcode' placeholder='Enter your zipcode' /><br></br>
          <input type='submit' value='Submit'/>
        </form>
      </React.Fragment>
    )
  }
}

export default ZipcodeForm
