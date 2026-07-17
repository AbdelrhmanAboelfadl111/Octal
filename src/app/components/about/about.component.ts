import { Component, signal } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-about',
  imports: [FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  public isActive = signal(false);
  ngOnInit() {
    this.isActive.set(true);
  }
}
