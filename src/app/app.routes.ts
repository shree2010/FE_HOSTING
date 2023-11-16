import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LivescoreComponent } from './pages/livescore/livescore.component';
import { MatchHistoryComponent } from './pages/match-history/match-history.component';
import { PointTableComponent } from './pages/points-table/points-table.component';

export const routes: Routes = [
    {
        path:"home",
        component:LivescoreComponent
    },
    {
        path:"livescore",
        component:LivescoreComponent
    },
    {
        path:"matchhistory",
        component:MatchHistoryComponent
    },
    {
        path:"pointsTable",
        component:PointTableComponent
    },
    {
        path: '',
        redirectTo: '/home', 
        pathMatch: 'full'
    }
];
