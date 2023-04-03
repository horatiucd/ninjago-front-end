import {Component, Input, OnInit} from '@angular/core';
import {Character} from './character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  @Input() character: Character;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleFavor() {
    window.alert('Favor / un-favor ' + this.character.name);
  }

  onDelete() {
    window.alert(this.character.name + ' is dismissed.');
  }
}
