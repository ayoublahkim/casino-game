import {Component, Input} from '@angular/core';
import {CofeedStory} from "../../model/cofeed.story";
/**
 * @author Ayoub LAHKIM
 */
@Component({
  selector: 'cofeed-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']

})
export class StoryComponent {

  selected: boolean=false;
  @Input() story: Partial<CofeedStory> | null = null;

  constructor() {
  }


}
