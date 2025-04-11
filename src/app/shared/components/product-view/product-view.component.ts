import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../../models/product.model';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.scss'
})
export class ProductViewComponent implements OnInit {

  @Input() listImage: Image[] = []

  selectedImage: Image

  constructor() {

  }

  ngOnInit(): void {
    this.selectedImage = this.listImage[0]
  }

  setSelectedImage(image: Image) {
    this.selectedImage = image
  }
}
