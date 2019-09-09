import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ComponentsModule, FormsModule, ReactiveFormsModule],
  exports: [CommonModule, ComponentsModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule {}
