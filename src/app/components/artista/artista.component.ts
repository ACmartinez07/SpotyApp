import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css'],
})
export class ArtistaComponent implements OnInit {
  artista: any = {};
  topTracks: any = {};

  loadingArtist: boolean;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loadingArtist = true;
    // tslint:disable-next-line: deprecation
    this.router.params.subscribe((params) => {
      this.getArtista(params.id);
      this.getToptracks(params.id);
    });
  }

  // tslint:disable-next-line: typedef
  getArtista(id: string) {
    this.loadingArtist = true;
    // tslint:disable-next-line: deprecation
    this.spotify.getArtista(id).subscribe((artista) => {
      this.artista = artista;
      this.loadingArtist = false;
    });
  }

  // tslint:disable-next-line: typedef
  getToptracks(id: string) {
    // tslint:disable-next-line: deprecation
    this.spotify.getTopTracks(id).subscribe((toptracks) => {
      console.log(toptracks);
      this.topTracks = toptracks;
    });
  }

  ngOnInit(): void {}
}
