import React from 'react';
import bookImg from '../../assets/pngwing 1.png'

const Banner = () => {
    return (
        <div className='flex justify-around items-center mt-12 p-16 rounded-3xl bg-[#131313]/5'>
            <div>
                <h2 className='text-5xl mb-12'>Books to freshen up <br /> your bookshelf</h2>
                <button className='btn btn-primary bg-[#23BE0A] text-white border-none'>View The List</button>
            </div>
            <div>
                <img className='w-10/12' src={bookImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;