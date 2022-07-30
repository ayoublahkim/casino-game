import {Component, OnDestroy, OnInit} from '@angular/core';
import {Categories} from "../../model/types.enum";
import {KeyValue} from "@angular/common";
import {GameService} from "../../services/game.service";
import {filter, interval, map, mergeMap, Subject, Subscription, takeUntil, toArray} from "rxjs";
import {GameEntity} from 'src/app/model/game.entity';
import {JackPotService} from "../../services/jackpot.service";
import { CurrencyPipe } from '@angular/common'

@Component({
  selector: 'casino-topbar',
  templateUrl: 'topbar.component.html'
})
export class TopbarComponent implements OnInit, OnDestroy {

  currentIndex: number = 0;
  destroyed$ = new Subject();

  categories: ReadonlyMap<Categories, string> = new Map([
    [Categories.TOP, 'Top'],
    [Categories.NEW, 'New'],
    [Categories.SLOTS, 'Slots'],
    [Categories.JACKPOTS, 'JackPots'],
    [Categories.LIVE, 'Live'],
    [Categories.BLACKJACK, 'BlackJack'],
    [Categories.ROULETTE, 'Roulette'],
    [Categories.TABLE, 'Table'],
    [Categories.POKER, 'Poker'],
    [Categories.OTHER, 'Other']
  ]);
  games: GameEntity[] | undefined;
  busy$: Subscription | undefined;

  constructor(private gameService: GameService, private jackPotService: JackPotService,private cp: CurrencyPipe) {
  }

  ngOnInit(): void {
    this.filterGames();
    this.jackpot$(1000).pipe(takeUntil(this.destroyed$)).subscribe(v => {
      v.subscribe(l => {
        console.log(l)
        l.forEach((jackPotGame: { game: string | undefined; amount: number | undefined; }) => {
          const actualGame: GameEntity = this.games?.find(g => g.id === jackPotGame.game)!;
          if (!!actualGame) {
            actualGame.jackpot = jackPotGame.amount;
            console.log('jackpot !',actualGame);
          }
        })
        // @ts-ignore
        this.games=[...this.games]
      })
    })

  }

  jackpot$(delay: number) {
    return interval(delay).pipe(map(() => this.jackPotService.findAllJackPots()));
  }

  filterGames() {

    this.busy$ = this.gameService.findAllGames().pipe(
      filter(Boolean),
      takeUntil(this.destroyed$),
      mergeMap<Array<GameEntity>, Array<GameEntity>>(game => game),
      map((game: GameEntity, i) => {
        if (!game.categories?.every(c => Object.values(Categories).includes(c))) {
          game.categories?.push(Categories.OTHER);
        }
        return game;
      }),
      filter(game => {
        const selectedCategory = Array.from(this.categories.keys())[this.currentIndex];
        // @ts-ignore
        return game.categories.some(category => selectedCategory === category);
      }),
      toArray(),
    ).subscribe(games => {
      console.log(games)
      this.games = games;

    });
  }

  originalOrder = (a: KeyValue<string, string>, b: KeyValue<string, string>): number => {
    return 0;
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  onChange(event: any) {
    this.currentIndex = event.index;
    this.filterGames();
  }
}
