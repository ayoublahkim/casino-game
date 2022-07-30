import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Categories} from "../../model/types.enum";
import {GameEntity} from 'src/app/model/game.entity';

@Component({
  selector: 'casino-game',
  templateUrl: 'game.component.html'
})
export class GameComponent implements OnInit, OnDestroy {

  @Input() game: GameEntity | undefined
  categories = Categories;
  opacity = '100%'
  cursor: any ;
  constructor() {
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }

}
