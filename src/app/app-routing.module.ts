import { Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { ProgramminComponent } from './programmin/programmin.component';

export const routes: Routes = [
  // {
  //   path:'',
  //   redirectTo:'homePage',
  //   pathMatch:'full'
  // },
  {
    path:'',
    component: HomeComponent,
    pathMatch:'full'
  },
  {
    path:'home',
    component: HomeComponent,
  },
  {
    path:'home/programming',
    component: ProgramminComponent,
  },
  {
    path:'home/history',
    component: HistoryComponent,
  },
];

