import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
ngOnInit () {

}
contactPage() {
this.scrollDownByViewport();
}


constructor(private viewportScroller: ViewportScroller) {}
scrollDownByViewport() {
  // const currentY = window.scrollY;
  // const viewportHeight = window.innerHeight;
  // this.viewportScroller.scrollToPosition([0, currentY + viewportHeight]);
  window.scrollTo(0,document.body.scrollHeight);

}

scrollToMiddlePage(): void {
  const scrollHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;
  const middlePosition = (scrollHeight - windowHeight) / 2;

  window.scrollTo({
    top: middlePosition,
    behavior: 'smooth' // For a smooth scrolling animation
  })
}
}