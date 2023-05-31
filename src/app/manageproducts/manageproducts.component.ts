import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FetchProductsService } from '../fetch-products.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-manageproducts',
  templateUrl: './manageproducts.component.html',
  styleUrls: ['./manageproducts.component.css'],
})
export class ManageproductsComponent implements OnInit {
  fetchingProducts: boolean = false;

  trash = faTrash;
  edit = faEdit;

  @ViewChild('id') id!: ElementRef;
  @ViewChild('name') name!: ElementRef;
  @ViewChild('price') price!: ElementRef;

  editMode: boolean = false;
  editIndex!: number;
  products = [
    {
      id: 1001,
      name: 'Ram',
      price: 45200,
    },
    {
      id: 1002,
      name: 'Sam',
      price: 78200,
    },
    {
      id: 1003,
      name: 'Jadhu',
      price: 52200,
    },
    {
      id: 1004,
      name: 'Madhu',
      price: 23200,
    },
  ];

  constructor(private fetchProduct: FetchProductsService) {}

  dataTitle = this.fetchProduct.getDataTitle();
  ngOnInit(): void {
    this.fetchProducts();
  }

  addProduct(id: any, name: any, price: any) {
    if (this.editMode) {
      // console.log(this.products[this.editIndex])
      this.products[this.editIndex] = {
        id: id.value,
        name: name.value,
        price: price.value,
      };
      this.editMode = false;
      this.id.nativeElement.value = '';
      this.name.nativeElement.value = '';
      this.price.nativeElement.value = '';
    } else {
      this.products.push({
        id: id.value,
        name: name.value,
        price: price.value,
      });
      this.fetchProducts();
    }
    this.saveProducts();
  }

  removeItems(i: number) {
    if (confirm('Do you want to delete this product?')) {
      this.products.splice(i, 1);
      this.saveProducts();
    }
  }

  saveProducts(): void {
    this.fetchProduct.saveProducts(this.products).subscribe({
      next: (res: any) => console.log(res),
      error: (error: any) => console.log(error),
    });
  }

  editItems(i: number) {
    // console.log(this.products[i].id)
    // console.log(this.products[i].name)
    // console.log(this.products[i].price)

    this.editMode = true;
    this.editIndex = i;
    this.id.nativeElement.value = this.products[i].id;
    this.name.nativeElement.value = this.products[i].name;
    this.price.nativeElement.value = this.products[i].price;
  }

  fetchProducts(): void {
    this.fetchingProducts = true;
    setTimeout(() => {
      this.fetchProduct.fetchProducts().subscribe({
        next: (res: any) => {
          const data = JSON.stringify(res);
          console.log(data);
          this.products = JSON.parse(data);
          this.fetchingProducts = false;
        },
        error: (error: any) => console.log(error),
      });
    }, 5000);
  }
}
