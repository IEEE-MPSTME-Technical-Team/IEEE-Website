import React, { useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import team from '../../img/About/team.png'
import mission from '../../img/About/mission.png'
import vision from '../../img/About/vision.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const First = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
    return (
        <div className="top">
            <h1 data-aos="fade-down">About Us</h1>
            <div class="row">
                <div class="col s12 l4 push-l7 offset-l1" data-aos="fade-left" >
                    <img src={team} alt="" class="responsive-img materialboxed" />
                </div>
                <div class="col s12 l6 pull-l6 right-align offset-l1" data-aos="fade-right">
                    <h2 class="indigo-text text-darken-4">Our Team</h2>
                    <p>IEEE MPSTME, a student chapter of IEEE, formed by the
                    Undergraduates of MPSTME in 2017, is a student led organization that
                    strives to collaborate on world-changing technologies, from computing
                    and sustainable energy systems to aerospace, robotics, communication
                    and more. Over time it has grown into a community of more than 50
                    members all from different course streams. We at IEEE MPSTME believe
                    that there is a better way to share, gain and build up our knowledge about
                    the advancing technologies and the ways of a fast-moving and unstoppable
generation.</p>
                </div>
            </div>
            <div class="row">
                <div class="col s12 l4 push-l1" data-aos="fade-right">
                    <img src={mission} alt="" class="responsive-img materialboxed" />
                </div>
                <div class="col s12 l6 left-align push-l1 offset-l1" data-aos="fade-left">
                    <h2 class="indigo-text text-darken-4">Mission</h2>
                    <p>Our mission is to foster technological innovation and excellence for the
benefit of humanity.</p>
                </div>
            </div>
            <div class="row">
                <div class="col s12 l4 push-l7 offset-l1" data-aos="fade-left">
                    <img src={vision} alt="" class="responsive-img materialboxed" />
                </div>
                <div class="col s12 l6 pull-l6 right-align offset-l1" data-aos="fade-right">
                    <h2 class="indigo-text text-darken-4">Vision</h2>
                    <p>Our vision is to be essential to the global technical community and to
                    upcoming technical professionals everywhere and be recognized for the
contributions to technology.</p>
                </div>
            </div>
        </div>

    )
}
export default First