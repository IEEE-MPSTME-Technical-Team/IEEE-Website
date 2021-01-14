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
                    <a className="carousel-item" href="#one!"><img src="https://firebasestorage.googleapis.com/v0/b/ieee-website-f4149.appspot.com/o/About%2FPR%20Execs%2FDiptesh%20Chaudhari%2C%20PR.jpg?alt=media&token=464a5056-7e01-45c9-9ba5-881c30cd9502" data-aos="zoom-in"/><caption>Diptesh Chaudhari</caption></a>
                    <a className="carousel-item" href="#one!"><img src="https://firebasestorage.googleapis.com/v0/b/ieee-website-f4149.appspot.com/o/About%2FPR%20Execs%2FLaksh%20Dhirwani%2C%20PR.jpeg?alt=media&token=9dd99971-e62f-4dc3-a2d4-741056609435" data-aos="zoom-in"/><caption>Laksh Dhirwani</caption></a>
                    <a className="carousel-item" href="#one!"><img src="https://firebasestorage.googleapis.com/v0/b/ieee-website-f4149.appspot.com/o/About%2FPR%20Execs%2FLaksh%20Karia%2C%20PR.jpeg?alt=media&token=d0142a16-9676-47bb-8bde-cd4a5f915648" data-aos="zoom-in"/><caption>Laksh Karia</caption></a>
                    <a className="carousel-item" href="#one!"><img src="https://firebasestorage.googleapis.com/v0/b/ieee-website-f4149.appspot.com/o/About%2FPR%20Execs%2FNaman%20Agarwal%2C%20PR.jpeg?alt=media&token=ab4ab932-e338-4ca2-ab03-cf021f2eeefc" data-aos="zoom-in"/><caption>Naman Agarwal</caption></a>
                    <a className="carousel-item" href="#one!"><img src="https://firebasestorage.googleapis.com/v0/b/ieee-website-f4149.appspot.com/o/About%2FPR%20Execs%2FSanheet%20Ganguly%2C%20PR.jpeg?alt=media&token=af944e22-9df8-4325-8068-69171fa58569" data-aos="zoom-in"/><caption>Sanheet Ganguly</caption></a>
                </div>
            </div>
            
        )

}
export default Carousel
