import React,{useState} from 'react'

const Exo1  = () => {
    const[h3, seth3] = useState("J'aime pas react")
    const[classh3, setclassh3] = useState("")
    const click = () => {
        seth3("Le titre est changé")
        setclassh3("text-danger bg-primary")
    }
    return(
        <div className="px-3 py-3">
            <h3 className={classh3}>{h3}</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat numquam porro</p>
            <ul>
                <li>Bg crème</li>
                <li>Bg crème</li>
                <li>Bg crème</li>
                <li>Bg crème</li>
                <li>Bg crème</li>
                <li>Bg crème</li>
            </ul>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat numquam porro</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat numquam porro</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat numquam porro</p>
            <button onClick={click} className="btn btn-dark">Changer le titre</button>
        </div>
    )
}

export default Exo1