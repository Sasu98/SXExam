import { Component, OnInit } from '@angular/core';
import { Examen, Ejercicio } from '../exam.class';

@Component({
  selector: 'app-process-page',
  templateUrl: './process-page.component.html',
  styleUrls: ['./process-page.component.css']
})
export class ProcessPageComponent implements OnInit {
  examen = new Examen();
  ejercicio_seleccionado = false;

  constructor() {
    let ej1 = new Ejercicio();
      ej1.pregunta = "Hola?";
    let ej2 = new Ejercicio();
      ej2.pregunta = "Como?";
    let ej3 = new Ejercicio();
      ej3.pregunta = "Estas?";

    this.examen.ejercicios.push(ej1, ej2, ej3);
  }

  ngOnInit() {
  }

}
