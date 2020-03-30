import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-layout',
  template: `
    <div class="content-layout">
      <div>Content Layout</div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: ['.content-layout {width: 100%;}'],
})

export class ContentLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
