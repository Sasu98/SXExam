import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
  @Output() onRequestStartExam = new EventEmitter();

  public page: number = 1;

  constructor() { }

  ngOnInit() {
  }

  prevPage(){
    if (this.page > 1) this.page--;
  }

  nextPage(){
    if (this.page < 3) this.page++;
    else if (confirm("¿Estas seguro que deseas iniciar el examen?")){
      this.onRequestStartExam.emit();
    }
  }
}
