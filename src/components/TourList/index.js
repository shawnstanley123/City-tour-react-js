import React, { Component } from 'react'
import './TourList.scss'
import Tour from '../Tour/Tour'
import {tourData} from '../Tour/tourData'
export default class TourList extends Component {
  state={
    tours: tourData
  }; 
  deleteTour = id =>{
    const {tours} =this.state;
const variable = tours.filter(tour=>tour.id!==id)
this.setState({
  tours: variable
})
  }
  render() {
   const {tours} = this.state;
    return (
    
     <section className="tourlist">
    {tours.map(tour=> {
      return <Tour key={tour.id} tour={tour} deleteTour={this.deleteTour}/>
    })}
     </section>
    ) 
  }
}
