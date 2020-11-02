import React, { useState } from 'react';
import data from './data.json'
import Loader from './loader'
import logo from '../../images/platzi.png'
import video from '../../video/que-es-core.mp4'
import '../../less/less.less'
import '../../sass/sass.scss'
import '../../stylus/stylus.styl'

console.log(data);
function App(){
    const [loaderList, setLoaderList] = useState([]);
    async function handleClick(){
        setLoaderList(data.loaders);
        const { alerta } = await import('./alert.js')
        alerta('omg, este modulo ha cargado dinamicamente');
    }
    return (
        <div>
           <p className="sass">Esto es sass</p>
           <p className="less">Esto es less</p>
           <p className="stylus">Esto es stylus</p>
           <p className="post-css">Esto es postCSS</p>
            <p>Que linda aplicacion con React JS img loader</p>
            <video src={video} width={360} controls poster={logo}></video>
            <p>
                <img src={logo} alt=""  width={40} />
            </p>
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