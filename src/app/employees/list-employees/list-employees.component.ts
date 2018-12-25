import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  fn:string="Vijay";
  ln:string="kumar";
  gender:string="male";
  age:number=30;
  
  constructor() { }

  ngOnInit() {
  }

}
