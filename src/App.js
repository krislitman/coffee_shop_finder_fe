import './App.css'
import React from 'react'
import  Header  from './components/header'
import Footer from './components/footer'
import MainContent from './components/mainContent'
import styled from 'styled-components'
class App extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Header />
          <MainContent />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
