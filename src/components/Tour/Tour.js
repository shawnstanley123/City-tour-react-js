import React, { Component } from 'react'
import './Tour.scss'
export default class Tour extends Component {
  state={
showInfo: false
  }
 
 
 handleInfo = () =>{
this.setState({showInfo: !this.state.showInfo})
  }
  render() {
    const {id,img,city,name,info}=this.props.tour;
    const {deleteTour} =this.props;
    return (
     <article className="tour">
       <div className="img-container">
       <img src={img} alt=""  />
      <span className="close-btn" onClick={()=>{deleteTour(id)}}>
<i className="fas fa-window-close"/>
      </span>
       </div>
       <div className="tour-info">
         <h3>{city}</h3>
         <h4>{name}</h4>
         <h5><span onClick={this.handleInfo}>info <i className="fas fa-caret-square-down"></i></span></h5>
        { this.state.showInfo && <p>{info}</p>}
       </div>
     </article>
    )
  }
}
