import React, { Component } from 'react';
import ContactSummary from './ContactSummary';
import Forms from './Forms';
class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container" id="dashboard-container" style={{
        width: "100%"
      }}>
        <div id="videotag-container">
          <video className='videoTag' autoPlay loop muted style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            height: "60%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
            backgroundColor: "transparent"
          }}>
            <source src="https://firebasestorage.googleapis.com/v0/b/ieee-website-f4149.appspot.com/o/Contact%2FVideo%2FContactBackground.mp4?alt=media&token=c8954f07-7b7a-485c-a1b2-a21109ec391a" type='video/mp4' />
          </video>
        </div>
        <div id="animated-gif-container">
          <div style={{
            color: "#063E56",
            fontWeight: "bold",
            fontSize: "4rem",
            textAlign: "center"
          }}>Contact Us</div>
        </div>
        <div className="row">
          <div className="col s12 m6">
            <ContactSummary />
          </div>
          <div className="col s12 m6">
            <Forms />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
