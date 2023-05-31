import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products=[
    {productId:1, productName:'Television', proguctImgURL:'', description:'This is Sony Bravia'},
    {productId:2, productName:'Laptop', proguctImgURL:'', description:'This is HP Laptop'},
    {productId:3, productName:'Mobile', proguctImgURL:'', description:'This is Samsung Mobile'},
    {productId:4, productName:'Washing Machine', proguctImgURL:'', description:'This is Goodraj Washing Machine'},
  ]
  constructor(){}

  ngOnInit(): void {
    
  }

}
