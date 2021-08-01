// eslint-disable-next-line
import React, { useState } from 'react'
import '../zipcodeForm.css'

// eslint-disable-next-line
const zipcodeAPI = 'https://www.zipcodeapi.com/rest/{REACT_APP_ZIPCODE_API_KEY}/info.json/{zipcode}/degrees'

class ZipcodeForm extends React.Component {
  constructor() {
    super()
    this.state = {
      zipcode: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    console.log("Click")
    this.setState({
      zipcode: event.target.value
    })
    event.preventDefault()
  }

  // componentDidMount() {
  //   fetch(zipcodeAPI)
  //     .then(response => response.json())
  // }

  render() {
    return (
        <form>
          <input
            type='text'
            placeholder='Enter your zipcode'
            name='zipcode'
            value={this.state.zipcode}
            onChange={this.handleChange}
          /><br></br>

          <button onClick={this.handleSubmit}>☕️</button>
        </form>
    )
  }
}

export default ZipcodeForm
