import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EmailModalComponent } from './email/email-modal.component';

@NgModule({
  declarations: [
    EmailModalComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EmailModalComponent,
  ]
})
export class ModalModule { }
