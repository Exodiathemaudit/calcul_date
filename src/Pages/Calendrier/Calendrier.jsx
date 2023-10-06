import { Gantt } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";
import lib from '../../lib'

export function Calendrier(props) {
    if(props.modules.length === 0){
        return <p>Pas de Modules Créer</p>
    }

    return (
        <Gantt tasks={props.modules.map( (module) => {

        console.log(lib.consume(module.debut, module.duree))

            const dateFin = new Date(module.debut)
            dateFin.setDate(dateFin.getDate() + module.duree);

            return {
                start: new Date(module.debut),
                end: new Date(lib.consume(module.debut, module.duree).fin) ,
                name: module.nom,
                id: module.id,
                type:'task',
                progress: 100,
                isDisabled: true,
                styles: { progressColor: module.couleur , progressSelectedColor: '#ff9e0d' },
            }}
        )
        } />
    )
}