import { Component,OnInit } from '@angular/core';
// IMPORTAMOS NUESTRA INTERFAZ 
import { Jugador } from "src/app/models/jugador";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  // PROPIEDAD PUBLICA (TIPO ARRAY)
  public info: Jugador[];

  // INICIALIZA LA PROPIEDAD INFO
  constructor(){
    this.info = [
      {
        nombre: "Ezequiel Zeballos",
        equipo: "Boca",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxO7tBQsamYpzF1RUjpDhKvGyNeHdbgSiUXIDknvsZTw&s",
        descripcion: "Chango",
      },
      {
        nombre: "Ezequiel Zeballos",
        equipo: "Boca",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxO7tBQsamYpzF1RUjpDhKvGyNeHdbgSiUXIDknvsZTw&s",
        descripcion: "Chango",
      }
    ]
  }

  // EVENTO DE CONSTRUCCION/ INICIALIZACION
  ngOnInit(): void{
  }
}