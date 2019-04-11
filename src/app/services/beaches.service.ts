import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { map, toArray, filter, delay } from 'rxjs/operators';

export interface Beach {
    id: string;
    name: string;
    desc?: string;
    img?: string;
}

const data = [
    {
        id: '1',
        name: 'Avellanas',
        desc:
            'Playa Avellanas en Santa Cruz de Guanacaste es uno de los spots más populares de Costa Rica. Es locación habitual de cientos de selfies de turistas, que aprovechan un puente de madera rodeado de ramas secas, símbolo del lugar, para fotografiarse durante sus vacaciones. Avellanas es una playa de arena blanca y árboles que dan sombra en la orilla. También destaca por sus olas, que la convierten en un sitio predilecto para los surfistas, desde principiantes hasta avanzados.',
        img: '//goplaya.cr/archivos/IMG_20170416_111332.jpg'
    },
    {
        id: '2',
        name: 'Playa Blanca (Papagayo)',
        desc:
            'Playa de arena blanca, oleaje suave y robusta vegetación que se ubica en el Golfo de Papagayo.  Estas características, sumado a las pocas formaciones rocosas que posee, la convierten en una piscina natural ideal para relajarse, en contacto con la naturaleza. Eso sí, antes de disfrutar de este paraje, será necesario que saqué a relucir su instinto aventurero, pues tendrá que superar un largo sendero con 702 escalones. ¡Toda una aventura!',
        img: '//goplaya.cr/archivos/playablancaeditada1.jpg'
    },
    {
        id: '3',
        name: 'Playa Conchal',
        desc:
            'Playa Conchal es un paraíso de arena blanca, agua cristalina y oleaje suave. La arena clara se mezcla con miles de diminutas conchas para crear un paraje único y cada vez más cotizado por los turistas. Tiene mucha vegetación cerca de la playa, lo que produce sombra. Hay poca piedra en la orilla, pero la claridad del agua hace que resalten las formaciones rocosas dentro del mar y se genere un arcoíris que embellece el paisaje.',
        img: '//goplaya.cr/archivos/IMG-20161103-WA0151.jpg'
    }
];

@Injectable({
    providedIn: 'root'
})
export class BeachesService {
    constructor() {}

    getBeaches(): Observable<Beach[]> {
        return from(data).pipe(
            map((beach: Beach) => {
                return {
                    id: beach.id,
                    name: beach.name
                };
            }),
            toArray(),
            delay(1000)
        );
    }

    getBeach(id: string): Observable<Beach> {
        return from(data).pipe(filter((beach: Beach) => beach.id === id), delay(1000));
    }
}
