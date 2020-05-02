import React,{useState} from 'react'

const Exo4  = () => {
    const [cpt, setCpt] = useState(0)
    const click = () => {
        setCpt(cpt + 1)
    }
    const click2 = () => {
        setCpt(0)
    }
    return(
        <div className="px-3 py-3">
            <div className="row no-gutters justify-content-center mt-2">
                <div className="divBlue bg-primary mr-4 col-5 d-flex justify-content-center align-items-center">
                    {cpt % 2 === 0 && <div id="divRouge"></div>}
                </div>
                <div className="divBlue bg-primary col-5 d-flex justify-content-center align-items-center">
                    {cpt % 2 === 1 && <div id="divRouge"></div>}
                </div>
            </div>
            <div className="text-center mt-5">
                <buttton onClick={click} className="btn btn-primary">Changer de position</buttton>
                <br/>
                <buttton onClick={click2} className="btn btn-success mt-1">Nombre de click {cpt}</buttton>
            </div>
        </div>
    )
}

export default Exo4;
