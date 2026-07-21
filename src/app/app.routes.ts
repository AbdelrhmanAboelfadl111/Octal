import { Routes } from '@angular/router';
import { HomePadgeComponent } from './components/home-padge/home-padge.component';
import { AboutComponent } from './components/about/about.component';
import { ByVinPadgeComponent } from './components/searchByVin/by-vin-padge/by-vin-padge.component';
import { TeamComponent } from './components/team/team.component';
import { DataPageComponent } from './components/data/data-page/data-page.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';

export const routes: Routes = [
  { path: '', component: HomePadgeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'searchByVin', component: ByVinPadgeComponent },
  { path: 'team', component: TeamComponent },
  { path: 'login', component: DataPageComponent },
  { path: 'dashBoard', component: DashBoardComponent },
];
