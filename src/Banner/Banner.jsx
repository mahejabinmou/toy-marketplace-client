import React from 'react';


const Banner = () => {
    
    return (
        <div className='mb-8 grid md:grid-cols-2 items-center  '>
            <img src="https://i.ibb.co/StrfhTg/banner1.jpg" className='rounded-xl w-[500px]' alt="" />
        
             <div className='space-y-6 text-center'>
                <h2 className='text-5xl text-secondary font-bold'>Disney Princess??</h2>
             <p>A Disney princess is one of the many female heroines of Disney animated films. While not always princesses by birth, these women are usually praised for their determination, skills and strong wills. Disney has long used princesses as main characters, from the virtuous Snow White to the modern and feisty Mulan.
            </p>
              </div>
        </div>
    );
};

export default Banner;