import React from 'react';
import Bg from './img/bg.jpg';
import About from './img/about-bg.jpg'
import './style.css';

const index = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="containerImage">
                            <img src={Bg} class="d-block w-100" alt="..." />
                            <div class="posisitionText fw-bold fs-3">
                                THIS IS PLACE WHERE TECHNOLOGY & <br />
                                CREATIVIY FUSED INTO DIGITAL CHEMISTRY
						</div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="containerImage">
                            <img src={About} class="d-block w-100" alt="..." />
                            <div class="posisitionText fw-bold fs-3">
                                WE DON'T HAVE THE BEST BUT WE HAVE A <br />
                                GREATEST TEAM
						</div>
                        </div>
                    </div>
                </div>
                <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default index;
