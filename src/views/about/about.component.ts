import { Component } from '@angular/core';
import { RouterOutlet, } from '@angular/router';

@Component({
  selector: 'view-about',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  title = 'About';
}
