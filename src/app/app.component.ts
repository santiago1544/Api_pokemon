import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ApiPokemon';

  loader = true;

  constructor(){}

  ngOnInit(): void {
    setTimeout(() => {
      this.loader = false
    }, 1500);
  }
}
