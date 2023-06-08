import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
})
export class AboutusComponent implements OnInit {
  constructor(private activateroute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activateroute.fragment.subscribe((res) => {
      console.log(res);
      this.JumpTo(res);
    });
  }

  JumpTo(section: any) {
    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
      // console.log("hello click"+section)
    }, 1000);
  }
}
