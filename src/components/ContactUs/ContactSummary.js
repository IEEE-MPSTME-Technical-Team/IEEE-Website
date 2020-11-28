import React from 'react'
import AnimatedCard from './ContactusCard'
import AinalSirCard from './ContactUsAinal'
import VinodSirCard from './ContactUsVinod'
import NavinCard from './ContactUsNavin'
import NiraliCard from './ContactUsNirali'
import Nishantcard from './ContactUsNishant'
const ContactSummary = () => {
  return (
  <div className="contact-summary section">
    <div className="card z-depth-0 project-summary" id="contact-card">
      {/*<div className="card z-depth-5 project-summary" data-aos="fade-right">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title ">IEEE MPSTME</span>
          <p>ieee.mpstme.01@gmail.com</p>
        </div>
      </div>

      <div className="card z-depth-4 project-summary" data-aos="fade-right">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title ">Vinod Jain</span>
          <p>IEEE NMIMS MPSTME Student Branch Counselor</p>
          <p className="grey-text">Vinod.Jain@nmims.edu</p>
        </div>
      </div>

      <div className="card z-depth-4 project-summary" data-aos="fade-right">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title ">Ainal Abdul Azeez</span>
          <p>IEEE MPSTME student body faculty mentor</p>
          <p className="grey-text">AinalAbdul.Azeez@nmims.edu</p>
        </div>
      </div>

      <div className="card z-depth-4 project-summary" data-aos="fade-right">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title ">Navin Agarwal</span>
          <p>Chairman</p>
          <p className="grey-text">navinagarwal.nmims@gmail.com</p>
        </div>
      </div>

      <div className="card z-depth-4 project-summary" data-aos="fade-right">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title ">Nirali Kabli</span>
          <p>Vice Chairman</p>
          <p className="grey-text">nirali6129@gmail.com</p>
        </div>
      </div>

      <div className="card z-depth-4 project-summary" data-aos="fade-right">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title ">Isha Gupta</span>
          <p>Treasurer</p>
          <p className="grey-text">ishagu10@gmail.com</p>
        </div>
      </div>

      <div className="card z-depth-4 project-summary"data-aos="fade-right">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title ">Nishant Goel</span>
          <p>Secretary</p>
          <p className="grey-text">Nishant.goel15@nmims.edu.in</p>
        </div>
  </div>*/}
      <VinodSirCard data-aos="fade-right"></VinodSirCard>
      <AinalSirCard data-aos="fade-right"></AinalSirCard>
      <NavinCard data-aos="fade-right"></NavinCard>
      <NiraliCard data-aos="fade-right"></NiraliCard>
      <AnimatedCard data-aos="fade-right"></AnimatedCard>
      <Nishantcard data-aos="fade-right"></Nishantcard>
    </div>
    </div>
  )
}

export default ContactSummary