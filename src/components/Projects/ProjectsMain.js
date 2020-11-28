import React, { useEffect } from 'react';
import PastEvents from './PastProjects';
import UpComingEvents from './UpComingProjects';

function EventsMain() {
    useEffect(() => {
        window.$('.slide-nav').on('click', function (e) {
            e.preventDefault();
            // get current slide
            var current = window.$('.flex--active').data('slide'),
                // get button data-slide
                next = window.$(this).data('slide');

            window.$('.slide-nav').removeClass('active');
            window.$(this).addClass('active');

            if (current === next) {
                return false;
            } else {
                window.$('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
                window.$('.flex--active').addClass('animate--end');
                setTimeout(function () {
                    window.$('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
                    window.$('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
                }, 800);
            }
        });
    })
    return (
        <>
            <div className="slider__warpper">
                <div className="flex__container flex--dialga flex--active" data-slide="1" style={{ overflowX: "hidden" }}>
                    <div className="flex__item flex__item--left Projects_Left">
                    <div className="flex__content">
                        <p className="text--sub">IEEE MPSTME</p>
                        <h1 className="text--big">Ongoing Projects</h1>
                        <p className="text--normal">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                    </div>
                    <p className="text__background">Ongoing</p>
                    </div>
                    <div className="flex__item flex__item--right Projects_Right"></div>
                    {/* <img className="pokemon__img" src="https://lh3.googleusercontent.com/proxy/TWeJIT5--zilVt58aWjypiRSIMhV3g3OJ5cNwd4PyAB0rgqLNbkyY9V0KVnnvDgSa9FxulY69Fr_tMNzfH2FzLZ3NIjNayLAfGICK6DshRxXBKZvXcs_0Pk" /> */}
                    <UpComingEvents />
                </div>
                <div className="flex__container flex--zekrom animate--start" data-slide="2" style={{ overflowX: "hidden" }}>
                    <div className="flex__item flex__item--left Projects_Left">
                        <div className="flex__content">
                        <p className="text--sub">IEEE MPSTME</p>
                        <h1 className="text--big">Completed Projects</h1>
                        <p className="text--normal">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                    </div>
                    <p className="text__background">Completed</p>
                    </div>
                    <div className="flex__item flex__item--right Projects_Right"></div>
                    {/* <img className="pokemon__img" src="https://s4.postimg.org/sa9dl4825/pilup.png" /> */}
                        <PastEvents />
                </div>
            </div>

            <div className="slider__navi">
                <a href="#" className="slide-nav active" data-slide="1">pikachu</a>
                <a href="#" className="slide-nav" data-slide="2">piplup</a>
            </div>
        </>
    )
}

export default EventsMain
