import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './containers/login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  declarations: [LoginComponent, LoginFormComponent],
  imports: [LoginRoutingModule, SharedModule]
})
export class LoginModule {}
