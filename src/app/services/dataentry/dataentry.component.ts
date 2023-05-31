import { Component, OnInit} from '@angular/core';
import { faListSquares } from '@fortawesome/free-solid-svg-icons';
import { faSquareFull } from '@fortawesome/free-solid-svg-icons';
import { FetchProductsService } from 'src/app/fetch-products.service';
import { employee } from 'src/app/userData.interface';
@Component({
  selector: 'app-dataentry',
  templateUrl: './dataentry.component.html',
  styleUrls: ['./dataentry.component.css']
})
export class DataentryComponent implements OnInit {
  listViewDetails = faListSquares;
  listviewTable = faSquareFull;

  employee: employee | any = '';
  
  constructor(private fetchservice: FetchProductsService) {}

  ngOnInit(): void {
    this.fetchservice.getEmployee().subscribe((res) => {
      console.log(res);
      this.employee = res;
    });
  }
}
