import { Component, Input } from '@angular/core';
import { Article } from 'src/app/shared/article.model';

@Component({
  selector: 'app-search-result',
  template: `
    <ul class="search-results">
      <li class="search-result" *ngFor="let result of results | async">{{result.title}}</li>
    </ul>
  `,
  styles: [`
    .search-results {
      margin: 0;
      padding: 0;
      list-style: none;
      width: 320px;
    }
    .search-result {
      padding: 0.5rem;
      background: #4A89DC;
      color: #E6E9ED;
      border: 1px solid #5D9CEC;
    }
  `]
})
export class SearchResultsComponent  {
  @Input() results: Article[] = [];
}
