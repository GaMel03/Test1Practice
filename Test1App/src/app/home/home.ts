import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  studentName = 'Gamaliel';
  courseName = 'Front End Frameworks';
  isLocked = false;

  courses = [
  { name: 'Angular', credits: 3 },
  { name: 'Java', credits: 4 },
  { name: 'Portfolio', credits: 2 },
];


}
