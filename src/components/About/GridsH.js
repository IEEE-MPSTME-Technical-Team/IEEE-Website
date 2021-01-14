import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Grids = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
    return (
        <div className="teamh">
            <div className="row">
                <div className="col s12 l4 push-l7 offset-l1" data-aos="fade-up-left">
                    <img src="https://firebasestorage.googleapis.com/v0/b/ieee-website-f4149.appspot.com/o/About%2FHeads%2FAngad.jpg?alt=media&token=e90e0209-35d7-4298-853c-17275a0c0261" alt="" className="responsive-img materialboxed" />
                </div>
                <div className="col s12 l6 pull-l6 right-align offset-l1" data-aos="fade-up-right">
                    <h2 className="indigo-text text-darken-4">Angad Singh Kataria</h2>
                    <p>Angad is the technical backbone of our committee. Winner of many coding challenges, needless to say he has tech at his fingertips.He ensures all the IEEE events are relevant and current. He motivates his team as he leads them effortlessly.</p>
                </div>
            </div>
            <div className="row">
                <div className="col s12 l4 push-l1" data-aos="fade-up-right">
                    <img src="https://firebasestorage.googleapis.com/v0/b/ieee-website-f4149.appspot.com/o/About%2FHeads%2FMeera.jpg?alt=media&token=e6670452-6b14-4999-8a17-f44459d009f1" alt="" className="responsive-img materialboxed" />
                </div>
                <div className="col s12 l6 left-align push-l1 offset-l1" data-aos="fade-up-left">
                    <h2 className="indigo-text text-darken-4">Meera Kapade</h2>
                    <p>Armed with a pleasant disposition and cheerful countenance, Meera is a true diplomat. She inspires her team as she leads by example. Sharp as a tack and blessed by a clever turn of phrase, she’s IEEE NMIMS’s PR head.</p>
                </div>
            </div>
            <div className="row">
                <div className="col s12 l4 push-l7 offset-l1" data-aos="fade-up-left">
                    <img src="https://firebasestorage.googleapis.com/v0/b/ieee-website-f4149.appspot.com/o/About%2FHeads%2FRakshita.jpg?alt=media&token=08a3d91b-cd60-4e8d-a90d-9f979ed6aeda" alt="" className="responsive-img materialboxed" />
                </div>
                <div className="col s12 l6 pull-l6 right-align offset-l1" data-aos="fade-up-right">
                    <h2 className="indigo-text text-darken-4">Rakshita Chawla</h2>
                    <p>Hailing from the Pink City, Rakshita has cleverly infused Digital Creatives with her artistic vision. As a leader she guides her team with passion.
                    She thinks outside the box and effortlessly showcases ideas through the digital medium.
We are happy to have someone with an aesthetic vision like hers on our team!</p>
                </div>
            </div>
            <div className="row">
                <div className="col s12 l4 push-l1" data-aos="fade-up-right">
                    <img src="https://firebasestorage.googleapis.com/v0/b/ieee-website-f4149.appspot.com/o/About%2FHeads%2FHem.jpg?alt=media&token=6e04eabe-18fc-466d-ad9b-5a737a413291" alt="" className="responsive-img materialboxed" />
                </div>
                <div className="col s12 l6 left-align push-l1 offset-l1" data-aos="fade-up-left">
                    <h2 className="indigo-text text-darken-4">Hem Thakar</h2>
                    <p>Hem personifies grit and gumption as he navigates the industrial ties as our Corporate Relations Head.
                    With great elan and chutzpah he offers us a peek into the tech world.
Besides being a Marvel fan he’s also a bibliophile and we are glad to have a person with such drive and conviction on our team.</p>
                </div>
            </div>
        </div>


    )
}
export default Grids
