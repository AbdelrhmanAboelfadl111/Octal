import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-upper-head',
  imports: [],
  templateUrl: './upper-head.component.html',
  styleUrl: './upper-head.component.scss',
})
export class UpperHeadComponent {
  public title = input<string>();
  public brief = input<string>();
  public isActive = signal(false);
  ngOnInit() {
    this.isActive.set(true);
  }
}
