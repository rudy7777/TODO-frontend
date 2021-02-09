import { Component, OnInit } from '@angular/core';
import { countReset } from 'console';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private http:TodoServiceService) { }

  ngOnInit(): void {

this.http.count().subscribe(
  data=>{
    console.log(data["data"])
  })

  }

}
