import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css'],
})
export class TarjetasComponent implements OnInit {
  @Input() items: any[] = [];

  constructor(private router: Router) {}

  // tslint:disable-next-line: typedef
  verArtista(item: any) {
    let artistaID;

    if (item.type === 'artist') {
      artistaID = item.id;
    } else {
      artistaID = item.artists[0].id;
    }

    this.router.navigate(['/artist', artistaID]);
  }

  ngOnInit(): void {}
}
