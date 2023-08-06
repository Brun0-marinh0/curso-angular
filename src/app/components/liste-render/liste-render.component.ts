import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-render',
  templateUrl: './liste-render.component.html',
  styleUrls: ['./liste-render.component.css']
})
export class ListeRenderComponent {
  items = [
    {name: "a"},
    {name: "b"},
    {name: "c"},
  ]
}
