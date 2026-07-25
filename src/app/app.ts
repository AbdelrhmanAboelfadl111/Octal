import { ApplicationRef, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoadingPageComponent } from "./components/loading-page/loading-page.component";
import { filter, take } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, LoadingPageComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('app-misrInsurance');
  public isCarArrive: boolean = false;
  public webIsLoading = signal<boolean>(true);

  constructor(private appRef: ApplicationRef) {

    this.appRef.isStable
      .pipe(
        filter(isStable => isStable),
        take(1)
      )
      .subscribe(() => {
        setTimeout(() => {
            this.webIsLoading.set(false);
        },500)
      });

  }
}
