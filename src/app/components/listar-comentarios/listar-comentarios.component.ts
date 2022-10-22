import { Component, OnInit } from '@angular/core';
import {Comentario} from 'src/app/interfaces/Comentarios';

@Component({
  selector: 'app-listar-comentarios',
  templateUrl: './listar-comentarios.component.html',
  styleUrls: ['./listar-comentarios.component.css']
})
export class ListarComentariosComponent implements OnInit {

listComentarios: Comentario [] =[
{
  titulo:'DESARROLLO',
  autor: 'EVER QUENGUAN',
  fechaCreacion: new Date(), 
  texto:'Ejercicio'
},
{
  titulo:'SEGURIDAD',
  autor: 'CAMILO QUENGUAN',
  fechaCreacion: new Date(), 
  texto:'DATOS'
},

{
  titulo:'Auditora',
  autor: 'SARA QUENGUAN',
  fechaCreacion: new Date(), 
  texto:'Datos'
},
{
  titulo:'Maestra',
  autor: 'MARY LUNA',
  fechaCreacion: new Date(), 
  texto:'Datos'
},
{
  titulo:'Directora',
  autor: 'MARIA QUENGUAN',
  fechaCreacion: new Date(), 
  texto:'Datos'
}

]
  constructor() { }

  ngOnInit(): void {
  }

}
