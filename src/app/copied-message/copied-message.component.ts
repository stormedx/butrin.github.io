import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-notification',
  templateUrl: './copied-message.component.html',
  styleUrls: ['./copied-message.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ transform: 'translateY(0)', opacity: 1 })),
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('300ms ease-out'),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateY(100%)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class NotificationComponent {
  @Input() showNotification = false;
}

@Component({
  selector: 'app-copied-message',
  templateUrl: './copied-message.component.html',
  styleUrls: ['./copied-message.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300),
      ]),
      transition(':leave', [
        animate(300, style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class CopiedMessageComponent {
  showNotification = false; // You need this property to control the animation
}