import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Advertisement } from '../../models/advertisement.model';

@Component({
  selector: 'app-advertisement',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './advertisement.component.html',
  styleUrl: './advertisement.component.scss'
})
export class AdvertisementComponent implements OnInit {

  @Input() advertise: Advertisement

  constructor() {

  }
  ngOnInit(): void {

  }
}
