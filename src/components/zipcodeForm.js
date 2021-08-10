import React from 'react'
import axios from 'axios'

class ZipcodeForm extends React.Component {
  constructor(){
    super()
    this.state = {
      isLoading: false,
      coffeeShops: [],
    }
  }

  componentDidMount(){
   const Key = process.env.REACT_APP_ZIPCODE_API_KEY
   const response = axios.get('/v3/businesses/search', {
     params: {
      location: 33602,
      categories: 'coffee',
      sort_by: 'rating',
   },
   headers: {
    Authorization: `${Key}`,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Headers': 'Content-Type',
   },
  })
    const data = response.data
    this.setState({
      isLoading: true,
      coffeeShops: data,
    })
  }

  render() {
    return (
      <React.Fragment>
        <form align="center">
          <input type='text' id='zipcode' placeholder='Enter your zipcode' /><br></br>
          <button onClick={this.yelpCall}>☕️</button>
        </form>
      </React.Fragment>
    )
  }
}

export default ZipcodeForm
