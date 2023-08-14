import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success" [hidden]="displayNotification">
    <p>This website uses cookies to provide better user experience.</p>

    <div class="close">
      <button class="btn" (click)="closeNotification()">closeNotification</button>
    </div>
  </div>`,
  styles: [
    'div{margin:10px 0px; padding:10px 20px;  text-align:center; background-color:lightblue}',
    '.close{float:right; margin-top:-30px;}',
    `p{font-size: 14px;}`
  ],
})
export class NotificationComponent {
  displayNotification: boolean = false;
  closeNotification() {
    this.displayNotification = true;
  }
}






