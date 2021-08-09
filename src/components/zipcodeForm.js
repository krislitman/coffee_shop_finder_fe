import React from 'react'

class ZipcodeForm extends React.Component {
  constructor(){
    super()
    this.state = {
      isLoading: false,
      coffeeShops: [],
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <form align="center">
          <input type='text' id='zipcode' placeholder='Enter your zipcode' /><br></br>
          <input type='submit' value='☕️'/>
        </form>
      </React.Fragment>
    )
  }
}

export default ZipcodeForm
