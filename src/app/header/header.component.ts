import { Component, OnInit } from '@angular/core';
import { HerderserviceService } from '../service/herderservice.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  switchLang = '';
  browserLang = '';
  languageStatus = '';
  pageName = '';
  constructor(
    private headerservice: HerderserviceService,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.headerservice.selectedLang.subscribe((res) => {
      this.switchLang = res;
      this.browserLang = res;
      this.languageChanges();
    });

    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.browserLang = this.translate.getDefaultLang();
    this.languageChanges();
    this.headerservice.selectedLang.next(this.browserLang);

    this.headerservice.pageName.subscribe((res) => {
      this.pageName = res;
    });

    this.headerservice.selectedLang.subscribe((res) => {
      if (res == 'de') {
        this.languageStatus = res;
      } else {
        this.languageStatus = '';
      }
    });
  }

  selectedLanguage(lang: any) {
    console.log(lang);
    this.headerservice.selectedLang.next(lang);
  }

  languageChanges() {
    this.translate.use(
      this.browserLang.match(/de|en/) ? this.browserLang : 'en'
    );
  }
}
