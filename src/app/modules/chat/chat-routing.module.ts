import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from './containers/chat/chat.component';
import { ChatDetailComponent } from './containers/chat-detail/chat-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ChatComponent
      },
      {
        path: ':roomid',
        pathMatch: 'full',
        component: ChatDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule {}
