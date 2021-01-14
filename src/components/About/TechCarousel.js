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
                    <a className="carousel-item" href="#one!"><img src="https://firebasestorage.googleapis.com/v0/b/ieee-website-f4149.appspot.com/o/About%2FTech%20Execs%2FAditya%20Shah%2C%20Technical.jpeg?alt=media&token=1c3c01fd-cf4d-44b9-84e4-f4bedd626f0b" data-aos="zoom-in"/><caption>Aditya Shah</caption></a>
                    <a className="carousel-item" href="#one!"><img src="https://firebasestorage.googleapis.com/v0/b/ieee-website-f4149.appspot.com/o/About%2FTech%20Execs%2FKarthik%20Konar%2C%20Technical.jpg?alt=media&token=db29a40d-af40-45fb-963b-027b3895058f" data-aos="zoom-in"/><caption>Karthik Konar</caption></a>
                    <a className="carousel-item" href="#one!"><img src="https://firebasestorage.googleapis.com/v0/b/ieee-website-f4149.appspot.com/o/About%2FTech%20Execs%2FParag%20Dharadhar%2C%20Technical.jpeg?alt=media&token=984624f9-6608-4081-94b6-c504572cc5ab" data-aos="zoom-in"/><caption>Parag Dharadhar</caption></a>
                    <a className="carousel-item" href="#one!"><img src="https://firebasestorage.googleapis.com/v0/b/ieee-website-f4149.appspot.com/o/About%2FTech%20Execs%2FSamkit%20Shah%2C%20Technical.jpeg?alt=media&token=3b30bea7-416b-48ae-9267-eb7518fa3439" data-aos="zoom-in"/><caption>Samkit Shah</caption></a>
                    <a className="carousel-item" href="#one!"><img src="https://firebasestorage.googleapis.com/v0/b/ieee-website-f4149.appspot.com/o/About%2FTech%20Execs%2FSaumya%20Pailwan%2C%20Technical.jpg?alt=media&token=c20b95dc-4437-4f06-9e3a-babd746726a6" data-aos="zoom-in"/><caption>Saumya Paliwan</caption></a>
                    <a className="carousel-item" href="#one!"><img src="https://firebasestorage.googleapis.com/v0/b/ieee-website-f4149.appspot.com/o/About%2FTech%20Execs%2FShireen%20Chand%2C%20Technical%20.JPG?alt=media&token=c4b02bbd-dc46-4e5e-a80c-a74a323f8f92" data-aos="zoom-in"/><caption>Shireen Chand</caption></a>
                </div>
            </div>
            
        )

}
export default Carousel
