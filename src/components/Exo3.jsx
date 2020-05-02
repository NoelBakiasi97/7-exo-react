import React,{useState} from 'react'

const Exo3  = () => {
    const [span] = useState("h3")
    const [contenu, setContenu] = useState("inconnu")
    const click = (e) => {
        setContenu(e.target.previousElementSibling.value)
        e.target.previousElementSibling.value = ''
    }
    return(
        <div className="px-3 py-3">
            <h3>Welcome<span className={span}> {contenu}</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nemo totam sint provident maiores recusandae excepturi deserunt sed! Iusto explicabo vel illo deserunt asperiores, assumenda ab ad ipsa rerum minima. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum velit vitae soluta numquam commodi labore ipsa exercitationem, tenetur assumenda adipisci aperiam libero excepturi aliquid vero earum vel veritatis cumque harum.</p>
            <input type="text"/>
            <button onClick={click} className="bg-light ml-1">Go</button>
        </div>
    )
}

export default Exo3;