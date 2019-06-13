import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) { }

  static SEARCH_URL = 'https://www.babelcoder.com/api/v1/articles/search';

  search(query: string): Observable<any> {
    const params = new HttpParams().set('query', query);
    return this.http.get(ArticleService.SEARCH_URL, {params}).pipe(
      map((r) => r['articles'])
    );
  }
}
