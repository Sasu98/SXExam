import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  examStarted: boolean = false;

  startExam(){
    this.examStarted = true;
    //alert("El examen se esta cargando!")
  }
}
