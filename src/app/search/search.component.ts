import { Component, OnInit } from '@angular/core';
import { Article } from '../shared/article.model';
import { ArticleService } from '../shared/article.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-search',
  template: `
    <div>
      <app-search-form (searchFieldChange)='searchArticles($event.value)'></app-search-form>
      <app-search-result [results]='articles'></app-search-result>
    </div>
  `
})
export class SearchComponent implements OnInit {
  public articles: Observable<Article[]>;
  private searchTerms = new Subject<string>();

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articles = this.searchTerms.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(
        term => term ? this.articleService.search(term) :
        of<Article[]>([])
      )
    );
  }

  searchArticles(term) {
    this.searchTerms.next(term);
  }
}
