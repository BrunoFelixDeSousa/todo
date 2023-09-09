import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.css']
})
export class ReadAllComponent implements OnInit {

  closed = 0;

  list: Todo[] = [];
  listFinished: Todo[] = [];

  constructor(private service: TodoService, private router: Router) {}
  
  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      resposta.forEach(todo => {
        if(todo.finalizado) {
          this.listFinished.push(todo);
        } else {
          this.list.push(todo);
        }
      })
      this.closed = this.listFinished.length
    })
  }

  finalizar(item: Todo): void {
    item.finalizado = true;
    item.dataParaFinalizar = new Date();
    this.service.update(item).subscribe(() => {
        this.service.message('Task finalizada com sucesso!');
        this.list = this.list.filter(todo => todo.id !== item.id);
        this.closed++;
    });
  }

  delete(id: any): void {
    this.service.delete(id).subscribe(() => {
      //if (resposta === null) {
        this.service.message('Task deletado com sucesso!');
        this.list = this.list.filter(todo => todo.id !== id); 
      //}
    })
  }

  TasksFinalizadas(): void {
    this.router.navigate(['finalizados'])
  }

  createTask(): void {
    this.router.navigate(['create'])
  }
  
}
