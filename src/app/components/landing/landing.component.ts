import {Component, OnDestroy, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Subject} from "rxjs";
import {GameEntity} from "../../model/game.entity";

/**
 * @author Ayoub LAHKIM
 */
@Component({

  selector: 'casino-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'], animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({opacity: 0}),
            animate('200ms ease-out',
              style({opacity: 1})),
          ]
        ),
        transition(
          ':leave',
          [
            style({opacity: 1}),
            animate('200ms ease-in',
              style({opacity: 0}))
          ]
        )
      ]
    )
  ]
})


export class LandingComponent implements OnInit, OnDestroy {
  formGroup: FormGroup = new FormGroup({});
  fb: FormBuilder = new FormBuilder();
  destroyed$ = new Subject();
  games: Array<GameEntity> = new Array<GameEntity>();


  constructor() {
    this.buildForm();
  }

  buildForm(): void {
    this.formGroup = this.fb.group({});
  }

  ngOnInit(): void {
  }


  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }


}
