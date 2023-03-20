import { Component } from '@angular/core';

import { constants } from '@monorepo/common';

@Component({
  selector: 'monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-fe';
  companyName: string = constants.COMPANY_NAME;
}
