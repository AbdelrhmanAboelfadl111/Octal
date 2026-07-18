import { Component, signal } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-team',
  imports: [FooterComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent {
  public isActive = signal(false);

  ngOnInit() {
    this.isActive.set(true);
  }

}
