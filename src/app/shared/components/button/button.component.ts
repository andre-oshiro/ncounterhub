import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() label: string;
  @Input() disabled = false;
  @Input() backgroundColor: string;
  @Input() labelColor = '#000000';

  constructor() {}

  ngOnInit() {}
}
