import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  classCheck = false;
  classHead = false;


  constructor() {
  }

  ngOnInit(): void {
  }

  windowScroll(event): void {
   if (scrollY > 100) {
     this.classHead = true;
   }else {
     this.classHead = false;
   }
  }

  toggleClass(): void {
    this.classCheck = !this.classCheck;
  }

}
