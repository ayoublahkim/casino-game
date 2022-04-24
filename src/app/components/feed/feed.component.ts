import {ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {LikeService} from 'src/app/services/like.service';
import {CofeedFeed} from "../../model/cofeed.feed";
import {CofeedMetrics} from "../../model/cofeed.metrics";

/**
 * @author Ayoub LAHKIM
 */
@Component({
  selector: 'cofeed-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']

})
export class FeedComponent implements OnChanges {

  selected: boolean = false;
  _feed: Partial<CofeedFeed> | null = null;

  @Input() set feed(value: Partial<CofeedFeed> | null) {
    console.log('received feed', value)
    this._feed = {...value};
  }


  @Output() likeEvent: EventEmitter<CofeedMetrics> = new EventEmitter();

  constructor(private cd: ChangeDetectorRef, private likeService: LikeService) {
  }

  onLike() {
    this.likeEvent.emit({author: this._feed?.author, likes: this._feed?.likes});
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  getLikes(): number {
    // @ts-ignore
    // workaround because change detection does not refresh all the dom tree
    // todo fix
    return this.likeService.getItem(this._feed.author);
  }
}
