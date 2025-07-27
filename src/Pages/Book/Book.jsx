import React from 'react';
import { FaStarHalfStroke } from "react-icons/fa6";
import { Link } from 'react-router';

const Book = ({ SingleBook }) => {

    const{bookName,author,image,bookId,rating,category,tags,yearOfPublishing,publisher} = SingleBook;
  
    return (
        <Link to={`/bookDetails/${bookId}`}>
        <div className="card bg-base-100 w-96 shadow-sm border p-7 ">
            <figure className='p-5 bg-gray-100 w-2/3 mx-auto'>
                <img
                className='h-[170px]'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">

                <div className='flex justify-center gap-10 '>
                    {
                    tags.map(tag =><button>{tag}</button>)
                }
                </div>
                <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">{yearOfPublishing}</div>
                </h2>
                <p>Book By : {publisher}</p>
                <div className='border-t-1 border-dashed'>

                </div>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge badge-outline">{rating}<FaStarHalfStroke /></div>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Book;