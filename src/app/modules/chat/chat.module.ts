import { NgModule } from '@angular/core';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './containers/chat/chat.component';
import { ChatDetailComponent } from './containers/chat-detail/chat-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { ChatCardComponent } from './components/chat-card/chat-card.component';
import { MsgCardRightComponent } from './components/msg-card-right/msg-card-right.component';
import { MsgCardLeftComponent } from './components/msg-card-left/msg-card-left.component';
import { MsgInputComponent } from './components/msg-input/msg-input.component';

@NgModule({
  declarations: [
    ChatComponent,
    ChatDetailComponent,
    MsgCardRightComponent,
    MsgCardLeftComponent,
    ChatCardComponent,
    MsgInputComponent
  ],
  imports: [SharedModule, ChatRoutingModule]
})
export class ChatModule {}
