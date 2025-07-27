const getStoredBook = () =>{
    const storedBookSTR = localStorage.getItem("readList");

    if(storedBookSTR){
        const storeBookData = JSON.parse(storedBookSTR);
        return storeBookData;
    }
    else{
        return [];
    }
}

const addToStoredDB = (id) =>{
    const storeBookData = getStoredBook();

    if(storeBookData.includes(id)){
        alert("bhai ai id already exit")
    }
    else{
        storeBookData.push(id)
        const data = JSON.stringify(storeBookData);
        localStorage.setItem("readList",data)
    }
}

export {addToStoredDB}