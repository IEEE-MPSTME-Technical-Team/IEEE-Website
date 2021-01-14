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
                    <a className="carousel-item" href="#one!"><img src="https://firebasestorage.googleapis.com/v0/b/ieee-website-f4149.appspot.com/o/About%2FCR%20Execs%2FDivy%20Otawat%2C%20CR.jpg?alt=media&token=cdf1a590-9e7e-41c4-b126-9e972e33d4a5" data-aos="zoom-in"/><caption>Divy Otawat</caption></a>
                </div>
            </div>
            
        )

}
export default Carousel
