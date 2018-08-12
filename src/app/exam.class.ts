export class Ejercicio {
    pregunta: string = "";
    respuesta: string = "";
    imagen: string = "";
}

export class Examen {
    key: string;
    timestamp_inicial: number;
    timestamp_end: number;
    ejercicios: Array<Ejercicio> = [];
}
