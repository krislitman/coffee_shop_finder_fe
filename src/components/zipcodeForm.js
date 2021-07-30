import React from 'react'
import '../zipcodeForm.css'

class ZipcodeForm extends React.Component {
  constructor() {
    super()
    this.state = {
      zipcode: '',
    }
  }

  render() {
    return (
        <form>
          <input
            type='text'
            placeholder='Enter your zipcode'
            name='zipcode'
            value={this.state.zipcode}
          /><br></br>

          <button>☕️</button>
        </form>
    )
  }
}

export default ZipcodeForm

