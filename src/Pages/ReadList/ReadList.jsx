import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utility/addtoDB';
import Book from '../Book/Book';

const ReadList = () => {
    const [readList, setReadList] = useState([])
    const [sort,setsort] = useState([])
    const data = useLoaderData();
    console.log(data)

    useEffect(() => {
        const storeBookData = getStoredBook();
        const ConvertedStoredBooks = storeBookData.map(id => parseInt(id))
        const MyReadList = data.filter(book => ConvertedStoredBooks.includes(book.bookId));
        setReadList(MyReadList)

    }, [])




    const handlesort = (type) => {
        setsort(type)

        if(type ==="pages"){
            const shortByPage = [...readList].sort((a,b) => a.totalPages -b.totalPages);
             setReadList (shortByPage)  
        }
         if(type ==="ratings"){
            const shortByrating = [...readList].sort((a,b) => a.rating -b.rating);
             setReadList (shortByrating)  
        }
    }
    return (
        <div>
            <details className="dropdown">
                <summary className="btn m-1">Sort By : {sort? sort:""}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={()=>handlesort("pages")}>pages</a></li>
                    <li><a onClick={()=>handlesort("ratings")}>ratings</a></li>
                </ul>
            </details>
            <Tabs>
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Book I Read {readList.length}</h2>

                    {
                        readList.map(b => <Book key={b.bookId} SingleBook={b} ></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;