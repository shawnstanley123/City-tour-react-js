import React,{Component} from 'react'
import './App.scss';
import Navbar from './components/Navbar/Navbar'
import TourList from  "./components/TourList"

function App() {
  return (
    <div>
    <Navbar/>
    <TourList/>
    </div>
  );
}

export default App;
