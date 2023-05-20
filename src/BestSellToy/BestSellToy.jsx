import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BestSellToy = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div data-aos="fade-left" className='m-16   '>
            <div className='w-1/2 mx-auto space-y-7 '>
                <img src="https://i.ibb.co/kM0MNmW/61-WTAb-Aavs-L-AC-SY879.jpg" 
               className='w-[2oopx] h-[300px]' alt="" />
                <h2 className='text-2xl text-secondary p-2'>Best selling toy</h2></div>
            <p>Kids can explore a world of career fun with the Barbie paramedic doll and accessories!
                Playset includes Barbie doll (12-in/30.40-cm) dressed in a black pants and a yellow shirt.
                Role-play accessories include a stethoscope and medical bag for emergencies.
                Kids will love the paramedic theme and storytelling pieces to play out the career fun!
                Makes a great gift for kids 3 years old and up, especially those interested in learning how to
                 take care of people in emergencies and keep them safe.</p>
        </div>
    );
};

export default BestSellToy;