import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs';
import { HerderserviceService } from './service/herderservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'multilanguagefeature';

  pageName: string = ''; //Get Page Name

  constructor(
    public router: Router,
    private headerservice: HerderserviceService
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((e: Event): e is RouterEvent => e instanceof RouterEvent))
      .subscribe((e: RouterEvent) => {
        if (e instanceof NavigationEnd) {
          var lastIndex = window.location.pathname.indexOf('/') + 1;
          this.pageName = window.location.pathname.substring(lastIndex);
          console.log(this.pageName);
          this.headerservice.pageName.next(this.pageName);

          if (
            window.location.pathname.match('/de/') ||
            window.location.pathname.match('/de')  
          ) {
            this.headerservice.selectedLang.next('de');
          } else {
            this.headerservice.selectedLang.next('en');
          }
        }
      });
  }
}
