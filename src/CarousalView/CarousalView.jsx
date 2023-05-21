import React from 'react';

const CarousalView = () => {
    return (
        <div className="carousel w-1/2 mx-auto mb-12 ">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/sWkcpGv/im5.jpg" />
                <div className="absolute flex items-center h-full left-0  top-0
                bg-gradient-to-r from-[#f77bcd41] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                    <h2 className='text-2xl font-bold'>Reasonable Price For Toy Servicing</h2>
                    <p><small>There are many variations of passages of  available, but the majority have suffered alteration in some form</small></p>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full  ">
                <img src="https://i.ibb.co/brN7RSD/im8.jpg"  />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/4JRYMJP/im9.jpg"  />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/R3vrz3s/im10.jpg"  />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
                </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/xHSd8XS/m2.jpg"  />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
                </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/Gk2zmK8/m5.jpg" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default CarousalView;