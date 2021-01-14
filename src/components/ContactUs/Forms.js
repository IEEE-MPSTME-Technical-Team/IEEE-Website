import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ContactusCard.css'

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
    const url = 'https://www.instagram.com/ieee.nmims.mpstme/';
    window.open(url, '_blank');
  }
  OpenInstagram(){
    const url = 'https://www.facebook.com/IEEE-NMIMS-108287957697045';
    window.open(url, '_blank');
  }
  OpenLinkedin(){
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
                      {/*
                      <div className="form" >
                              <form action="" method="post" role="form" className="contactForm">
                                <div className="form-group">
                                  <input type="text" name="name" className="form-control" id="name" placeholder="Full Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
                                 </div>
                                 <div className="form-group">
                                   <input type="text" className="form-control" name="number" id="number" placeholder="Mobile Number" data-msg="Please enter a valid phone number" />
                                  </div>
                                <div className="form-group">
                                   <input type="text" className="form-control" name="type" id="type" placeholder="Project Type" data-rule="minlen:4" data-msg="Please enter a valid project type." />
                                </div>
                                <div className="form-group">
                                <textarea className="form-control" name="project" rows="2" data-rule="required" data-msg="Please give a description about your project" placeholder="Tell me about your project?"></textarea>
                                </div>
                                <a href="" className="menu-btn">Send it</a>
                                </form>
                             </div>  
                        */}

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
        <img id="face" src="https://firebasestorage.googleapis.com/v0/b/ieee-website-f4149.appspot.com/o/Contact%2FLogo%2Ffacebook2.png?alt=media&token=43f50e76-4b4f-4cd5-a83a-b3e045932d30" alt="IEEE NMIMS FACEBOOK" onClick={this.OpenInstagram} style={{
          height: "65px",
        }}>
        </img>
        <img id="insta" src="https://firebasestorage.googleapis.com/v0/b/ieee-website-f4149.appspot.com/o/Contact%2FLogo%2Finstagram.png?alt=media&token=20fd57a6-c134-484e-8475-0a5e29472e5a" alt="IEEE NMIMS INSTAGRAM" onClick={this.Openfacebook} style={{
          height:"60px"
        }}/>
        <img id="linked" src="https://firebasestorage.googleapis.com/v0/b/ieee-website-f4149.appspot.com/o/Contact%2FLogo%2Flinkedin1.png?alt=media&token=4d5cf22a-3d34-461f-a5c3-7adefa1646e8" alt="IEEE NMIMS LINKEDIN" onClick={this.OpenLinkedin} style={{
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

