import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  nombre!: string
  urlImage!: string
  tipo!: string
  modo!: string

  constructor(private PokemonService : PokemonService) {}

  ngOnInit(): void {
  }

  search(){
    this.PokemonService.getPokemon(this.nombre).subscribe((data:any)=>{
      this.urlImage = data.sprites.front_default
    })
  }

  type(){
    this.PokemonService.getPokemon(this.nombre).subscribe((data:any)=>{
      this.tipo = data.order
      this.modo = data.abilities[0].ability.name
    })
  }
}
