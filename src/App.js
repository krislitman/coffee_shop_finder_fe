import './App.css'
import React from 'react'
//import  Header  from './components/header'
//import Footer from './components/footer'
//import MainContent from './components/mainContent'
import ZipcodeForm from './components/zipcodeForm'

function App() {
	return (
		<React.Fragment>
		<div className='App'>
			<header className='AppHeader'>
				<h1>Coffee Shop Finder</h1>
					<ZipcodeForm/>
			</header>
		<div className='layout'>
	 		<div>Coffee Shops</div>
	   	<div>Coffee Shop Details</div>
			</div>
		</div>
		</React.Fragment>
	);
}

export default App;
