import React,{useState} from 'react'
import Egg from '../img/egg.png'

const Exo5  = () => {
    const [img, setImg] = useState([])
    const click = () => {
        let tab = img.slice()
        tab.push(img)
        setImg(tab)
    }  
    return(
        <div className="px-3 py-3">
            <h3>Génerer des images</h3>
            <p>Appuuez sur le boutton pour ajouter une image</p>
            <button onClick={click} className="btn btn-success">Ajouter</button>
            <div>
                {img.map(e => 
                <img src={Egg} className="w-25" alt=""/>
                    )}
            </div> 
        </div>
    )
}

export default Exo5