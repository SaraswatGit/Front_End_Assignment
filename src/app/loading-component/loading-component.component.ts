import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading-component',
  templateUrl: './loading-component.component.html',
  styleUrls: ['./loading-component.component.css'],
})
export class LoadingComponent implements OnInit {
  @Input() text!: string;
  constructor() {}

  ngOnInit(): void {}
}
