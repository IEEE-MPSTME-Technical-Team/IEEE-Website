import React,{useEffect} from 'react'
import M from 'materialize-css';
import Aos from 'aos'
import 'aos/dist/aos.css'


const Carousel = () =>{
    useEffect(() => {
        let elements = document.querySelectorAll(".carousel");
        M.Carousel.init(elements);
        Aos.init({duration: 3000});
    }, []);
        return(
            <div className="container">
                <div className="carousel">
                    <a className="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1" data-aos="zoom-in"/></a>
                    <a className="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2" data-aos="zoom-in"/></a>
                    <a className="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3" data-aos="zoom-in"/></a>
                    <a className="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4" data-aos="zoom-in"/></a>
                    <a className="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5" data-aos="zoom-in"/></a>
                </div>
            </div>
            
        )

}
export default Carousel
