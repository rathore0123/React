import { useState, useEffect } from 'react'

function useCurrencyList(){
    const [list, setList] = useState([]);
    async function getCurrencyList() {
        let currList = await fetch(`https://api.frankfurter.app/currencies`);
        let listObject = await currList.json();
        let list = Object.keys(listObject);
        setList(list)

    }
    useEffect(() =>{
        getCurrencyList()
    },[])
    return list;
}

export default useCurrencyList;