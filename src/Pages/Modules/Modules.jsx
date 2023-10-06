import { useState, useEffect } from 'react'
import Module from '../../Components/Module/Module';

const currentDate = new Date();

export function Modules(props) {
    const [debut, setDebut] = useState(currentDate.toISOString().split('T')[0]);

    const createModule = (evt) => {
        props.setModules([...props.modules, { nom: "Accueil", debut: debut, duree: 3, id: Math.random(), couleur: "#" + Math.floor(Math.random()*0xffffff).toString(16)}])
    };

    const deleteModule = (index) => {
        let tmp = [...props.modules]
        tmp.splice(index,1)
        props.setModules([...tmp])
    };

    const changeModule = (index, data) => {
        let tmp = [...props.modules]
        tmp[index] = data
        props.setModules([...tmp])
    };

    return (
        <div className="row">
            <div className='col-4'>
                <div className="form-floating">
                    <input 
                        type="date" 
                        className="form-control" 
                        id="floatingInput2" 
                        placeholder="Date de début" 
                        value={debut} 
                        onChange={ e => setDebut(e.target.value) }
                    />
                    <label htmlFor="floatingInput2">Date de début</label>
                </div>
            </div>

            <div className="col-4">
                <button className="btn btn-primary my-3 w-100" onClick={createModule}>Ajouter un module</button>
            </div>

            <div className="col-12">
                {
                    props.modules.map( (module, index) =>
                        <Module key={index} data={module} onChange={(data) => {changeModule(index, data)} } onDelete={()=> {deleteModule(index)}}/>
                    )
                }
            </div>
        </div>
    )
};