import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  showForm = false;

  onSwitchForm(): void {
    this.showForm = !this.showForm;
  }

}
