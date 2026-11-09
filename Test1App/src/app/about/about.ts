import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  yourName = '';
  count = 0;

  addOne() {
    this.count++;
  }

  clearName() {
    this.yourName = '';
  }
}