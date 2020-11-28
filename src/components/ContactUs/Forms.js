import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';
import linkedin from '../../img/ContactUs/linkedin.png';
import facebook from '../../img/ContactUs/facebook.png';
import instagram from '../../img/ContactUs/instagram.png';
AOS.init();

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  Openfacebook(){
    // here i wish to write the code for opening the page in new tab.
    const url = 'https://www.instagram.com/ieee.nmims.mpstme/';
    window.open(url, '_blank');
  }
  OpenInstagram(){
    // here i wish to write the code for opening the page in new tab.
    const url = 'https://www.facebook.com/IEEE-NMIMS-108287957697045';
    window.open(url, '_blank');
  }
  OpenLinkedin(){
    // here i wish to write the code for opening the page in new tab.
    const url = 'https://www.linkedin.com/company/ieee-nmims/';
    window.open(url, '_blank');
  }

  render() {
    function sendEmail(e) {
      e.preventDefault();

      emailjs.sendForm('gmail', 'IEEE_template', e.target, 'user_AxfOpBLhC7vKemzKUgg5f')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
      e.target.reset()
    }

    return (
      <div className="card z-depth-3 project-summary" id="form-card">
        <div data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500">
          <div className="Forms">
            <form id="contact-form" onSubmit={sendEmail}>
              <h5>Write to us!</h5>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" placeholder="Name" name="name" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Email Address" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" cols="50" rows="100" placeholder="Your message" name="message" />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
        <p>For more updates on latest events, follow us on </p>
        <img id="face" src={facebook} alt="ieee.nmims.mpstme" onClick={this.OpenInstagram} style={{
          height: "65px",
        }}>
        </img>
        <img id="insta" src={instagram} alt="IEEE NMIMS" onClick={this.Openfacebook} style={{
          height:"60px"
        }}/>
        <img id="linked" src={linkedin} alt="IEEE NMIMS LINKEDIN" onClick={this.OpenLinkedin} style={{
          height: "60px"
        }}/>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value })
  }

  handleSubmit(event) {
  }
}

export default Forms

