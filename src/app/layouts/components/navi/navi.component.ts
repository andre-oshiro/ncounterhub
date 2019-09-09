import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.scss']
})
export class NaviComponent implements OnInit {
  constructor() {}
  @ViewChild('navi', null) navi: ElementRef;

  ngOnInit() {}

  navToggle() {
    if (this.navi.nativeElement.classList.contains('responsive')) {
      this.navi.nativeElement.classList.remove('responsive');
    } else {
      this.navi.nativeElement.classList.add('responsive');
    }
  }
}
