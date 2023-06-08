import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FetchProductsService } from 'src/app/fetch-products.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  angleleft = faAngleLeft;
  editIcon = faEdit;

  editMode:string|null='';

  emp: any = '';

  constructor(
    private activateroute: ActivatedRoute,
    private fetchservice: FetchProductsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    //paramMap is observable
    this.activateroute.paramMap.subscribe((param) => {
      console.log(param.get('id'));
      this.fetchservice
        .getSingleEmployee(Number(param.get('id')) - 1)
        .subscribe((res) => {
          console.log(res);
          this.emp = res;
        });
    });


    //queryParamMap for 
    this.activateroute.queryParamMap.subscribe((qParam)=>{
      console.log(qParam);
      // console.log(qParam.get('editMode'))
      this.editMode=qParam.get('editMode')
    })
  }

  //goback function, first import location
  goback() {
    this.location.back();
  }
}
