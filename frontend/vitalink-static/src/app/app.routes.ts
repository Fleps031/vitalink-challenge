import { Routes } from '@angular/router';
import { Messages } from './pages/messages/messages';
import { Queue } from './pages/queue/queue';
import { Dashboard } from './pages/dashboard/dashboard';

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
];
