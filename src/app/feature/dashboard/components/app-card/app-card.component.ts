import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-app-card',
  templateUrl: './app-card.component.html',
  styleUrl: './app-card.component.scss'
})
export class AppCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() icon: string = '';
}
