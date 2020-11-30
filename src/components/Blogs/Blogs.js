import React, { useEffect } from "react";
import office from '../../img/Blogs/office.jpeg'
import forest from '../../img/Blogs/forest.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Blogs = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
    return (
        <div className="blogs">
            <div className="container">
                <h4 className="center">BLOGS</h4>
                <div className="row">
                    <div className="col s12 m6 l4">
                        <div className="card medium z-depth-5 hoverable" data-aos="fade-down">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img src={office} />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                                <p><a href="#">This is a link</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col s12 m6 l8">
                        <div className="card horizontal z-depth-5 hoverable" data-aos="fade-left">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img src={forest} />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                                <p><a href="#">This is a link</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col s12 m6 l8">
                        <div className="card horizontal z-depth-5 hoverable" data-aos="fade-right">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img src={forest} />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                                <p><a href="#">This is a link</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="row">
                    <div className="col s12 m6 l4">
                        <div className="card z-depth-4 hoverable" data-aos="fade-up">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img src={office} />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                                <p><a href="#">This is a link</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col s12 m6 l4">
                        <div className="card z-depth-4 hoverable" data-aos="fade-down">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img src={office} />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                                <p><a href="#">This is a link</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col s12 m6 l4">
                        <div className="card z-depth-4 hoverable" data-aos="fade-up">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img src={office} />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                                <p><a href="#">This is a link</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m6 l4">
                        <div className="card extra large z-depth-4 hoverable" data-aos="fade-up-right">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img src={office} />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                                <p><a href="#">This is a link</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col s12 m6 l4">
                        <div className="card small z-depth-4 hoverable" data-aos="fade-up-left">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img src={office} />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                                <p><a href="#">This is a link</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6 l4">
                        <div className="card small z-depth-4 hoverable" data-aos="fade-down-right">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img src={office} />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                                <p><a href="#">This is a link</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6 l8">
                        <div className="card horizontal z-depth-4 hoverable" data-aos="fade-down-left">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img src={office} />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                                <p><a href="#">This is a link</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m6 l12">
                        <div className="card horizontal z-depth-5 hoverable" data-aos="zoom-in">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img src={forest} />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                                <p><a href="#">This is a link</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs