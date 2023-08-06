import { Component } from '@angular/core';
import { myForm } from 'src/app/interfaces/MyForm';

@Component({
  selector: 'app-liste-render',
  templateUrl: './liste-render.component.html',
  styleUrls: ['./liste-render.component.css']
})
export class ListeRenderComponent {
  items: myForm[] = [
    {name: "a"},
    {name: "b"},
    {name: "c"},
  ]
}
