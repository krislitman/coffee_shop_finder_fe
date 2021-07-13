import './App.css'
import React from 'react'
import  Header  from './components/header'
import Footer from './components/footer'
import MainContent from './components/mainContent'

class App extends React.Component {
  render() {

    function newAlert() {
      return(
        alert('You clicked the footer')
      )
    }
    return(
      <React.Fragment>
        <Header />
        <MainContent />
        <Footer alert={newAlert}/>
      </React.Fragment>
    )
  }
}

export default App;
