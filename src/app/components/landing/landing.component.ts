import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {CofeedStory} from 'src/app/model/cofeed.story';
import {CofeedFeed} from "../../model/cofeed.feed";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {CofeedSuggestion} from "../../model/cofeed.suggestion";
import {LikeService} from "../../services/like.service";
import {CofeedMetrics} from "../../model/cofeed.metrics";
/**
 * @author Ayoub LAHKIM
 */
@Component({

  selector: 'cofeed-app-landing',
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

  menu: any[] = [{label: 'Home', icon: 'fa-solid fa-house', active: true},
    {label: 'Messages', icon: 'fa-solid fa-message'},
    {label: ' Profile', icon: 'fas fa-user'},
    {label: ' Saved Post', icon: 'fas fa-bookmark'},
    {label: 'Settings', icon: 'fas fa-gear'}];

  aboutMenu: string[] = ['About', 'Help', 'Terms', 'Popular', 'Language']


  stories: Partial<CofeedStory>[] = [
    {title: 'You', source: '../../../assets/layout/images/ayoub.jpg', canAdd: true},
    {title: 'Micheal', source: '../../../assets/layout/images/micheal.jpg'},
    {title: 'Abruzzi', source: '../../../assets/layout/images/abruzzi.jpg'},
    {title: 'Lincoln', source: '../../../assets/layout/images/linc.jpg'},
    {title: 'Tancredi', source: '../../../assets/layout/images/sara.jpg'},
    {title: 'Sucre', source: '../../../assets/layout/images/sucre.jpg'},
    {title: 'Bagwell', source: '../../../assets/layout/images/theo.jpg'},
    {title: 'Heisenberg', source: '../../../assets/layout/images/walter.jpg'}];

  suggestions: Partial<CofeedSuggestion>[] = [
    {name: 'Tuco', source: '../../../assets/layout/images/tuco.jpg', tag: '@tucoMeth'},
    {name: 'Hank', source: '../../../assets/layout/images/hank.jpg', tag: '@HankDEA'},
    {name: 'Jesse', source: '../../../assets/layout/images/jesse.jpg', tag: '@YoJesse'}];

  feeds: any[] = [{label: 'All'},
    {label: 'Following'},
    {label: 'Newest'},
    {label: 'Popular', active: true}];

  // @ts-ignore
  feedDetails: Partial<CofeedFeed>[] = [
    {
      author: 'Micheal',
      source: '../../../assets/layout/images/feeds/feed1.png',
      sourceAuthor: '../../../assets/layout/images/micheal.jpg',
      likes: this.likeService.getItem('Micheal'),
      comments: 45
    }, {
      author: 'Bagwell',
      source: '../../../assets/layout/images/feeds/feed3.png',
      sourceAuthor: '../../../assets/layout/images/theo.jpg',
      likes: this.likeService.getItem('Bagwell'),
      comments: 102
    },
    {
      author: 'Linc',
      source: '../../../assets/layout/images/feeds/feed2.png',
      sourceAuthor: '../../../assets/layout/images/linc.jpg',
      likes: this.likeService.getItem('Linc'),
      comments: 67
    },

    {
      author: 'Sara',
      source: '../../../assets/layout/images/feeds/feed4.png',
      sourceAuthor: '../../../assets/layout/images/sara.jpg',
      likes: this.likeService.getItem('Sara'),
      comments: 86
    }];
  accountOpen: boolean = true;
  likes: number = 0;
  comments: number = 33;

  constructor(private likeService: LikeService, private cd: ChangeDetectorRef) {
    this.buildForm();
  }

  buildForm(): void {
    this.formGroup = this.fb.group({
      search: new FormControl('')
    });
  }

  ngOnInit(): void {
  }


  ngOnDestroy(): void {
  }



  onMenuOver(item: any) {
    item['active'] = true;
    this.menu.filter(menu => menu.label !== item.label).forEach(m => m['active'] = false);
  }

  onFeedClick(feed: any) {
    feed['active'] = true;
    this.feeds.filter(f => f.label !== feed.label).forEach(m => m['active'] = false);
  }

  openAccount() {

  }

  onFeedLike(event: CofeedMetrics) {
    console.log('feed like', event)
    if (event.author == null) {
      throw new Error('Author is required')
    }
    const likes: number = this.likeService.getItem(event.author);
    // @ts-ignore
    this.likeService.setItem(event.author, likes+1);
    //TODO reference replace should trigger onChanges for feed component
    // console.log('before',this.feedDetails)
    // this.feedDetails.forEach(feed=>{
    //   if(feed.author===event.author){
    //     feed.likes=likes+1;
    //   }
    // });
    // console.log('after',this.feedDetails)
    // this.feedDetails= [...this.feedDetails];
    this.cd.detectChanges();

  }
}
