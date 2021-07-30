import React from 'react'
import '../zipcodeForm.css'

class ZipcodeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      zipcode: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({zipcode: event.target.value})
  }

  handleSubmit(event) {
    alert('Zip code submitted: ' + this.state.zipcode)
    event.preventDefault()
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Enter your zipcode'
            name='zipcode'
            value={this.state.zipcode}
            onChange={this.handleChange}
          /><br></br>

          <button>☕️</button>
        </form>
    )
  }
}

export default ZipcodeForm

