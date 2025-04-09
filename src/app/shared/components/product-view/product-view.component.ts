import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

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

  @Input() listImage: string[] = []

  selectedImage: string

  constructor() {

  }

  ngOnInit(): void {
    this.selectedImage = this.listImage[0]
  }

  setSelectedImage(image: string) {
    this.selectedImage = image
  }
}
