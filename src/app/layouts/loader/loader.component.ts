import {Component} from '@angular/core';
import {LoaderService} from './loader-service';
/**
 * @author Ayoub LAHKIM
 */
@Component({
  selector: 'casino-loader',
  template: `
    <div class="preloader" *ngIf="loading">
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
    </div>`,
})
export class LoaderComponent {

  loading: boolean = false;

  constructor(public loaderService: LoaderService) {
    this.loaderService.isLoading.subscribe((v) => {
      this.loading = v;
    });
  }
}
