import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  template: `
    <input type="text" placeholder="Enter your query"
    class="search-input"
    (keyup)="search($event)"/>
  `,
  styles: [
    `.search-input {
      outline: none;
      padding: 0.5rem;
      widht: 300px
    }`
  ]
})
export class SearchFormComponent {
  @Output() searchFieldChange = new EventEmitter();

  search(event: any) {
    this.searchFieldChange.emit({value: event.target.value});
  }
}
