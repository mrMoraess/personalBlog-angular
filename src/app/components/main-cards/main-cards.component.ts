import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-cards',
  templateUrl: './main-cards.component.html',
  styleUrl: './main-cards.component.css'
})
export class MainCardsComponent {
  @Input() backgroundColor = ''
  @Input() cardTitle = 'Null'
  @Input() cardImg = ''
  @Input() cardInfo = ''
  @Input() href = ''

}
