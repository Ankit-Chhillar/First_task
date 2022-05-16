import { Component } from '@angular/core';
// import { CookieService } from 'ngx-cookie-service';
// import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // cookieValue = '';
  // constructor(public cookieService: CookieService) {
  //   // this.cookieService.set('X-Auth-Token', uuidv4());
  //   // this.cookieService.set('X-Auth-Token');
  //   this.cookieValue = this.cookieService.get('X-Auth-Token');
  // }
  title = 'first-task';

}
