import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  appName="Department Works Fine tttt hghdd";

  userName:string = "sachin"; 
  myColor='brown';

  constructor() { }

  ngOnInit(): void {
  }

}
