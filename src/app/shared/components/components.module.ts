import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [ButtonComponent, InputComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [ButtonComponent, InputComponent]
})
export class ComponentsModule {}
