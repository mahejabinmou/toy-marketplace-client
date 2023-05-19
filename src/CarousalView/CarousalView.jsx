import React from 'react';

const CarousalView = () => {
    return (
        <div className="carousel w-1/2 mx-auto mb-12">
            <div id="slide1" className="carousel-item relative w-full h-[400px]">
                <img src="https://i.ibb.co/wpM12hw/gorila.jpg" className="w-96 rounded-xl" />
                <div className="absolute flex items-center h-full left-0  top-0
                bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                    <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                    <p><small>There are many variations of passages of  available, but the majority have suffered alteration in some form</small></p>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-[400px]">
                <img src="https://i.ibb.co/Dzw7Pqp/annamiror.jpg" className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-[400px]">
                <img src="https://i.ibb.co/Z272RkD/mt2.jpg" className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-[400px]">
                <img src="https://i.ibb.co/S6S9Q4r/dis.jpg" className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
                </div>
            <div id="slide5" className="carousel-item relative w-full h-[400px]">
                <img src="https://i.ibb.co/JrRmJsr/mt.jpg" className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
                </div>
            <div id="slide6" className="carousel-item relative w-full h-[400px]">
                <img src="https://i.ibb.co/ZHS1G0D/gori2.jpg" className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default CarousalView;