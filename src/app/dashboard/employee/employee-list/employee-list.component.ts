import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';
export interface Employee{
  employeeId:string,
  name:string,
  employeeType:string,
  age:number,
  phoneNumber:string,
  address:string,
  gender:string,
  email:string
}
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements AfterViewInit {
  displayedColumns: string[] = ['employeeId', 'name','employeeType','age','email','phoneNumber','gender','address'];
  employee=Array();
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;
  dataSource: MatTableDataSource<Employee>|any;
  constructor(private empservive:EmployeeServiceService) { 
    this.empservive.getAllEmployee().subscribe(res =>{
      this.employee=res
      // console.log(this.employee)
      this.dataSource = new MatTableDataSource(this.employee)
      // console.log(this.dataSource);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  ngAfterViewInit() {
   
   
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
