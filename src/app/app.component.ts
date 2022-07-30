import {Component, OnInit, Renderer2, RendererFactory2} from '@angular/core';
import {NavigationError, Router} from '@angular/router';

@Component({
  selector: 'casino-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  private renderer: Renderer2;

  constructor(
    private router: Router,
    rootRenderer: RendererFactory2) {
    this.renderer = rootRenderer.createRenderer(document.querySelector('html'), null);
  }


  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationError && event.error.status === 404) {
        this.router.navigate(['/404']);
      }
    });

  }
}

