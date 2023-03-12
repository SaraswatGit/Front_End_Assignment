import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-front-searching',
  templateUrl: './front-searching.component.html',
  styleUrls: ['./front-searching.component.css'],
})
export class FrontSearchingComponent implements OnInit {
  @Output() onUserSearch: EventEmitter<string> = new EventEmitter();

  faGithub = faGithub;

  constructor(private fb: FormBuilder) {}

  userSeacrhForm: FormGroup = this.fb.group({
    username: '',
  });

  ngOnInit(): void {
    throw new Error('lol try 1233');

  }

  onUserSubmit() {
    this.onUserSearch.emit(this.userSeacrhForm.value.username);
    this.userSeacrhForm.reset();
  }
}
