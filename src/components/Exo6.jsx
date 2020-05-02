import React,{useState} from 'react'
import Niveau2 from './Niveau2'

const Exo6  = () => {
    const [span1, setSpan1] = useState(" ?")
    const clickEgal = (e) => {
        setSpan1(Number(e.target.previousElementSibling.previousElementSibling.value)+Number(e.target.previousElementSibling.value))
    }
    
    return(
        <div className="px-3 py-3">
            <h3>Création de calculette</h3>
            <div className="mt-5">
                <h4 className="mb-3">Niveau 1</h4>           
                <input type="text"/> + <input type="text"/>
                <button onClick={clickEgal} className="mx-1">=</button>
                <span>{span1}</span>
            </div>
            <Niveau2 />
        </div>
    )
}

export default Exo6