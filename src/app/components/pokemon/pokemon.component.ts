import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { Pokemon } from 'src/app/models/pokemon.interface';

@Component({
  selector: 'app-image',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemon: Pokemon;
  details: boolean;

  constructor (
    private pokemonsService: PokemonsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('Identifier --> ', identifier);

    this.pokemonsService.getPokemonById(identifier).subscribe((pokemon) => {
      if(!pokemon){
        return this.router.navigateByUrl('/');
      }

      this.pokemon = pokemon;
      console.log('Image --> ', this.pokemon);
    })
  }

  changeDetails(): void {
    this.details = !this.details;
  }
}
