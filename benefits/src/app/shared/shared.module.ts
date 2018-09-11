import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNameComponent } from './components/full-name/full-name.component';
import { MoneyAmountComponent } from './components/money-amount/money-amount.component';
import { DeleteConfirmationModalComponent } from './components/delete-confirmation-modal/delete-confirmation-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NameInputComponent } from './components/name-input/name-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WaitingSpinnerComponent } from './components/waiting-spinner/waiting-spinner.component';

@NgModule({
  imports: [
    CommonModule,
    ModalModule,
    ReactiveFormsModule
  ],
  declarations: [
    FullNameComponent,
    MoneyAmountComponent,
    DeleteConfirmationModalComponent,
    NameInputComponent,
    WaitingSpinnerComponent
  ],
  exports: [
    FullNameComponent,
    MoneyAmountComponent,
    DeleteConfirmationModalComponent,
    NameInputComponent,
    WaitingSpinnerComponent
  ]
})
export class SharedModule { }
