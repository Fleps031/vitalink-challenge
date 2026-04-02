import { Routes } from '@angular/router';
import { Messages } from './pages/messages/messages';
import { Queue } from './pages/queue/queue';
import { Dashboard } from './pages/dashboard/dashboard';
import { Schedules } from './pages/schedules/schedules';

export const routes: Routes = [
    {
        path: '', component: Messages
    },
     {
        path: 'fila', component: Queue
    },
    {
        path: 'performance', component: Dashboard
    },
    {
        path: 'agendamentos', component: Schedules
    },
];
