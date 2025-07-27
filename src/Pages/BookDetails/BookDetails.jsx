import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../Utility/addtoDB';

const BookDetails = () => {
    const { id } = useParams();
    const bookid = parseInt(id)
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookid)
    console.log(data)
    const { bookName, image,author,review } = singleBook;

    const handleMarkAsRead = (id) =>{

       addToStoredDB(id)


    }

    return (
        <div className="card card-side  shadow-sm mt-7 ">
            <div className=' p-14 bg-[#131313]/5 rounded-4xl'  >
                <img
                className='w-[400px] h-[520px]  '
                    src={image}
                    alt="Movie" />
            </div>
            <div className="card-body">
                <h2 className="card-title text-4xl ">{bookName}</h2>
                <div>
                    <p  className="text-gray-800 leading-none mt-4">By: {author}</p>
                    <div className="h-[1px] w-full bg-dotted border-b border-dotted border-gray-400 mt-5"></div>
                    <p className='mt-5'>Fiction</p>
                    <div className="h-[1px] w-full bg-dotted border-b border-dotted border-gray-400 mt-5 mb-3"></div>
                    <p>Review :this is a review pages</p>
                </div>
                <div className="card-actions justify-end">
                    <button onClick={()=>handleMarkAsRead(id)} className="btn btn-primary">Mark As Read</button>
                    <button className="btn btn-primary">Add To Whishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;