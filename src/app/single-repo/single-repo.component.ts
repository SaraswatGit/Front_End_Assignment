import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-repo',
  templateUrl: './single-repo.component.html',
  styleUrls: ['./single-repo.component.css']
})
export class SingleRepoComponent implements OnInit {
  @Input() repo!: any;
  constructor() { }
  public onCardClick(evt: MouseEvent){
    throw new Error('Relax Bois yeh temporary measure hain.');
  }
  ngOnInit(): void {
    throw new Error('Lots of errors');

  }

}
