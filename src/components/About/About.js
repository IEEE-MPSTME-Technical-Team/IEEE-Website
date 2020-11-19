import React, {useEffect} from 'react'
import GridsC from './GridsC'
import GridsH from './GridsH'
import Parallax1 from './Parallax1'
import Parallax2 from './Parallax2'
import Aos from 'aos'
import 'aos/dist/aos.css'



const AboutComponent = () => {
    useEffect(() => {
        Aos.init({duration: 3000});
    }, []);
    return(
        <div className="">
        
            <Parallax1 />
            
            <div className=" grid1 section white"><GridsC /></div>
            <div className="gap2">
                <p className="center" data-aos="zoom-in"><b>Something about our team</b></p>
                <p className="container center" data-aos="zoom-in">We offer technology as a solution, the best there is.</p>
            </div>
            <Parallax2 />

            <div className=" grid2 section white"><GridsH /></div>
        </div>
    )    
}
export default AboutComponent
