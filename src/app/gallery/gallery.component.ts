import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{

  images=[
    {id:1, title:'Image1', imgUrl:'assets/sungluss.jpg'},
    {id:2, title:'Image2', imgUrl:'assets/shoes.jpg'},
    {id:3, title:'Image3', imgUrl:'assets/headphone.jpg'},
    {id:4, title:'Image4', imgUrl:'assets/handwatch.jpg'},
  ]
  constructor(){}

  ngOnInit(): void {
    
  }

}
