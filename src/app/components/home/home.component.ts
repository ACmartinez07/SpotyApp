import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  errorMensaje: string | undefined;

  constructor(private spotify: SpotifyService) {
    this.error = false;
    this.loading = true;
    // tslint:disable-next-line: deprecation
    this.spotify.getNewReleases().subscribe(
      (data: any) => {
        console.log(data);
        this.nuevasCanciones = data;
        this.loading = false;
      },
      (ErrorServicio) => {
        this.error = true;
        this.loading = false;
        this.errorMensaje = ErrorServicio.error.error.message;
      }
    );
  }

  ngOnInit(): void {}
}
