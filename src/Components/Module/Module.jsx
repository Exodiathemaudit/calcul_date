import { useState, useEffect } from 'react'
import * as Icon from 'react-bootstrap-icons';
import lib from '../../lib'

function Module(props) {

    const [data, setData] = useState(props.data);
    const [duree, setDuree] = useState(props.data.duree);
    const [debut, setDebut] = useState(props.data.debut);
    const [fin, setFin] = useState(props.data.debut);

    const handleChange = (evt) => {
        let tmp = {...data}
        tmp[evt.target.name] = evt.target.value
        setData({...tmp})
        props.onChange(tmp)
    };

    const handleDuree = (newDuree) => {
        const tmp = {...data}
        tmp.duree = newDuree
        props.onChange(tmp)
    };

    useEffect( () => {
        setDuree(props.data.duree)
    }, [props.data.duree]);

    useEffect( () =>{
        const dateDebut = new Date(debut);
        dateDebut.setDate(dateDebut.getDate() + duree);
        setFin(dateDebut.toISOString().split('T')[0])
    }, [duree]);


    return (
        <div className='row module' style={{backgroundColor: props.data.couleur}}>
            <div className="col-11">
                <div className="form-floating mb-2 mt-2">
                    <input type="text" className="form-control" name='nom' id="floatingInput1" placeholder="Nom" value={props.data.nom} onChange={ handleChange }/>
                    <label htmlFor="floatingInput1">Nom</label>
                </div>
            </div>
            <div className="col-1 text-end align-self-center">
                <a  className="btn btn-primary" ><Icon.ArrowUp /></a>
            </div>
            <div className="col-3">
                <a  className="btn btn-danger" onClick={props.onDelete}><Icon.Trash /></a>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Journée entière</label>
                </div>
            </div>
            <div className="col-2">
                <div className="form-floating">
                    <input type="date" className="form-control" id="floatingInput2" disabled placeholder="Date de début" value={debut} onChange={ e => setDebut(e.target.value) }/>
                    <label htmlFor="floatingInput2">Date de début </label>
                </div>
            </div>
            <div className="col-2">
                <div className="form-floating">
                    <input type="date" className="form-control" id="floatingInput2" disabled placeholder="Date de début" value={fin} onChange={ e => setFin(e.target.value) }/>
                    <label htmlFor="floatingInput2">Date de fin</label>
                </div>
            </div>
            <div className="col-2">
                <div className="form-floating mb-2">
                    <input type="number" className="form-control" name="duree" id="floatingInput3" placeholder="Durée" value={props.data.duree} onChange={ e => handleDuree(Math.max(0, parseInt(e.target.value))) }/>
                    <label htmlFor="floatingInput3">Durée</label>
                </div>
            </div>
            <div className="col-2">
                <div className="form-floating mb-2">
                    <input type="color" className="form-control" name="couleur" id="floatingInput3" placeholder="Couleur" value={props.data.couleur} onChange={ handleChange }/>
                    <label htmlFor="floatingInput3">Couleur</label>
                </div>
            </div>
            <div className="col-1 text-end align-self-center">
                <a  className="btn btn-primary"><Icon.ArrowDown /></a>
            </div>
        </div>
    )
}

export default Module       