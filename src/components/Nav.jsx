import React from 'react';
const Nav = (props) => {
    const afficher = (e) => {
        let temp = [...props.exo];
        temp.forEach(element => {
            element.etat = 'hide';
            element.lien = 'col-3';
        });
        temp[e.target.id].etat = 'block';
        temp[e.target.id].lien = 'col-3 bg-primary text-white';
        props.setExo(temp);  
    }

    return (
        <nav className='row w-75 mx-auto'>
            {props.exo.map((e, index) => <span className={e.lien} onClick={afficher} href='#' key={index} id={index}>Exercice {index + 1}</span>)}
        </nav>
    )
};
export default Nav