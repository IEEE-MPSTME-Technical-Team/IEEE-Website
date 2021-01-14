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
                    <a className="carousel-item" href="#one!"><img src="https://firebasestorage.googleapis.com/v0/b/ieee-website-f4149.appspot.com/o/About%2FDC%20Execs%2FAnushka%20Toshniwal%2C%20DC.JPG?alt=media&token=ecf86e8e-2448-4f77-b1cc-641602363a55" data-aos="zoom-in"/><caption>Anushka Toshniwal</caption></a>
                    <a className="carousel-item" href="#one!"><img src="https://firebasestorage.googleapis.com/v0/b/ieee-website-f4149.appspot.com/o/About%2FDC%20Execs%2FHitarth%20joshi%2C%20DC.jpeg?alt=media&token=a40a428b-6527-4593-859f-06d58d1eec27" data-aos="zoom-in"/><caption>Hitarth Joshi</caption></a>
                    <a className="carousel-item" href="#one!"><img src="https://firebasestorage.googleapis.com/v0/b/ieee-website-f4149.appspot.com/o/About%2FDC%20Execs%2FSoham%20Shah%2C%20DC.jpeg?alt=media&token=c1bd8852-7b62-495b-a447-fde26c26b87a" data-aos="zoom-in"/><caption>Soham Shah</caption></a>
                </div>
            </div>
            
        )

}
export default Carousel
