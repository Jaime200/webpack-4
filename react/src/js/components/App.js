import React, { useState } from 'react';
import data from './data.json'
import Loader from './loader'
console.log(data);
function App(){
    const [loaderList, setLoaderList] = useState([]);
    function handleClick(){
        setLoaderList(data.loaders);
    }
    return (
        <div>
            <p>Que linda aplicacion con React JS</p>
            <ul>
                {
                    loaderList.map((item)=> <Loader key={item.id} {...item}/>)
                    
                }
            </ul>
            <button onClick={handleClick} >Mostrar loader</button>
            
        </div>
    )
}



export default App