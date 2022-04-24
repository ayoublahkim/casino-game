import {Component, Input} from '@angular/core';
import {CofeedSuggestion} from "../../model/cofeed.suggestion";
/**
 * @author Ayoub LAHKIM
 */
@Component({
  selector: 'cofeed-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.scss']

})
export class SuggestionComponent {

  clicked: boolean = false;
  @Input() suggestion: Partial<CofeedSuggestion> = {};
  @Input() cssClass: string | undefined;
  opacity = '70%';

  constructor() {
  }


  onClick(event: any) {
    if (this.suggestion?.followed) {
      this.suggestion.followed = !this.suggestion.followed;
    } else {
      this.suggestion.followed = true;
    }

  }
}
