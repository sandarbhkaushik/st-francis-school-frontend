import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../../../app/service/core.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent implements OnInit {
  facultyData : any = [];

  constructor(public coreService: CoreService) { }

  ngOnInit() {
    this.getFaculty();
  }

  getFaculty(){
    this.coreService.getFaculty({}).subscribe(res=>{
      this.facultyData = res;
      console.log(res);
    },
    err=>{
      console.log(err);
    });
  }

}
