import React from 'react'
import SplashScreen from '../layout/SplashScreen'
import SimpleBottomNavigation from '../layout/bottomNav'
import Grid from '@material-ui/core/Grid';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import { Player } from 'video-react';
import TestimonialPage from '../components/LandingPage/Testimonial'
import Landing_Carousel from '../components/LandingPage/Landing_Carousel'
import Landing_Blog from '../components/LandingPage/Landing_Blog'

const LandingPage = () => {
    return (
        <div>
            <div className="mainLand">
                <Grid container spacing={40}>
                    <Grid item xs={12} className="landingContent" style={{ marginBottom: 316}}>
                    <div>
                            <div className="LandingVideo">
                                <video className='videoTag' autoPlay loop muted style={{
                                    display: "flex",
                                    width: "100%",
                                    height: "90vh",
                                    objectFit: "cover"
                                }}>
                                    <source src="https://firebasestorage.googleapis.com/v0/b/ieee-website-f4149.appspot.com/o/Landing%20Page%2FVideo%2FIEEELandingVideo.mp4?alt=media&token=d1de044d-210a-4959-bbab-713a3796aba7" type='video/mp4' />
                                </video>
                            </div>
                             <div>
                             <Landing_Carousel />
                             </div>
                        </div>
                    </Grid>
                      {/* <Grid item xs={12} className="LandingBlog">
                              <div>
                             <Landing_Blog />
                            </div> 
                    </Grid> */}
                    <Grid item xs={12}>
                        <div className="LandingTestimonial">
                            <TestimonialPage />
                        </div>
                    </Grid>
                    <Grid item xs={12} className="nav">
                        <SimpleBottomNavigation value="0"/>
                    </Grid>
                </Grid>
            </div>

        </div>
      )
}

export default LandingPage
