
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NavigationConstants } from './utils/constants/navigation.constants';

import { NavLinkModel } from './models/nav-link.model';
import { ParseRouteUtil } from './utils/parse-route.utils';

@Component({
  selector: 'lcu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {

  public Links: Array<NavLinkModel>;

  constructor(
    protected router: Router,
    protected activatedRoute: ActivatedRoute) {

    // this.BackgroundImage = './assets/images/bg_image.jpg';
  }

  public ngOnInit(): void {
    this.Links = NavigationConstants.MENU_ITEMS;

  }

  /**
   * Component loaded when routes change
   * 
   * @param evt router event
   */
  public OnActivate(evt: Event): void {
    this.routeChanged();
  }

  protected routeChanged(): void {

    const root: string = ParseRouteUtil.parse(this.router.url);

    
  }
}
