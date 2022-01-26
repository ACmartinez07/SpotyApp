import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  // tslint:disable-next-line: typedef
  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAsDAbXhtw9vH_lcJ0GDdXNGq5xLMWDvTZUSd0WQsrMAgb2sgbsSHiWGycn5YfZar53-YfMqNGqSY7FdQY',
    });

    return this.http.get(url, { headers });
  }

  // tslint:disable-next-line: typedef
  getNewReleases() {
    return this.getQuery('browse/new-releases?country=co').pipe(
      map((data: any) => data.albums.items)
    );
  }

  // tslint:disable-next-line: typedef
  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map((data: any) => data.artists.items)
    );
  }

  // tslint:disable-next-line: typedef
  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
    //   .pipe(
    //   map((data: any) => data.artists.items)
    // );
  }
  // tslint:disable-next-line: typedef
  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=co`).pipe(
      map((data: any) => data.tracks)
    );
  }
}
