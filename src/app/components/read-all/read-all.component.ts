import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.css']
})
export class ReadAllComponent implements OnInit {

  list: Todo[] = [
    {
      titulo: "teste",
      dataParaFinalizar: new Date,
      finalizado: false 
    },
    {
      titulo: "teste2",
      dataParaFinalizar: new Date,
      finalizado: false 
    }
  ]

  constructor() {}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
