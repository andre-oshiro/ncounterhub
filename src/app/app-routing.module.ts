import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './layouts/containers/default/default.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: 'chat',
        loadChildren: () => import('./modules/chat/chat.module').then(module => module.ChatModule)
      }
    ]
  },
  {
    path: 'login',
    pathMatch: 'full',
    loadChildren: () => import('./modules/login/login.module').then(module => module.LoginModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'chat'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
