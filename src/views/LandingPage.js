import React from 'react'
import SplashScreen from '../layout/SplashScreen'
import SimpleBottomNavigation from '../layout/bottomNav'
import Grid from '@material-ui/core/Grid';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import logo from '../img/IEEElogo.png'
import mpstme from '../img/LandingPage/mpstme4.PNG'
import mpstme2 from '../img/LandingPage/mpstme2.png'
import mpstme3 from '../img/LandingPage/nmims.jpg'
import mpstme4 from '../img/LandingPage/mpstme3.jpg'
import ParallaxCard from '../components/LandingPage/ParallaxCard';
import { Player } from 'video-react';
import VideoBg from "reactjs-videobg";
import headvideo from '../img/LandingPage/LandingVideo.mp4'
import poster from '../img/LandingPage/headimage.png'



const LandingPage = () => {

    return (
        <div>
            <div className="mainLand">
                <Grid container spacing={40}>
                    <Grid item xs={12} className="landingContent">
                        <AwesomeSlider className="mainpageslider" style={{ height: "95vh" }} animation="cubeAnimation">
                            <div data-src={mpstme} />
                            <div data-src={mpstme2} />
                            <div data-src={mpstme3} />
                            <div data-src={mpstme4} />
                        </AwesomeSlider>
                    </Grid>
                    <Grid item xs={12} >
                        <video className='videoTag' autoPlay loop muted style={{
                            position: "absolute",
                            width: "100%",
                            left: "50%",
                            height: "100%",
                            objectFit: "cover",
                            top: "150vh",
                            transform: "translate(-50%, -50%)",
                            zIndex: "-1",
                        }}>
                            <source src={headvideo} type='video/mp4' />
                        </video>
                    </Grid>
                    <Grid item xs={12} className="nav">
                        <SimpleBottomNavigation />
                    </Grid>
                </Grid>
            </div>

        </div>
    )
}

export default LandingPage
