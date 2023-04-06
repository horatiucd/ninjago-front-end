import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Character} from './character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  @Input() character: Character;

  @Output() dismiss = new EventEmitter();
  @Output() toggleFavor = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onToggleFavor(): void {
    this.toggleFavor.emit(this.character);
  }

  onDismiss(): void {
    this.dismiss.emit(this.character);
  }
}
