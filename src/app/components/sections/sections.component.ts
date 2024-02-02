import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrl: './sections.component.css'
})
export class SectionsComponent {
  @Input() tittleContent = ''
  @Input() background = ''
}
