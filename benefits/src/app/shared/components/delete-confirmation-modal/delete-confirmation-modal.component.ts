import { Component, Input, Output, EventEmitter, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-delete-confirmation-modal',
  templateUrl: './delete-confirmation-modal.component.html',
  styleUrls: ['./delete-confirmation-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteConfirmationModalComponent {
  @Input()
  text: string;

  @Input()
  title: string;

  @Output()
  deleteConfirmed: EventEmitter<boolean> = new EventEmitter();

  @ViewChild('modal')
  modal: ModalDirective;

  constructor(private changeDetector: ChangeDetectorRef) { }

  show() {
    this.modal.show();
    this.changeDetector.detectChanges();
  }

  delete($event) {
    $event.preventDefault();
    this.deleteConfirmed.emit(true);
    this.modal.hide();
  }

  close($event) {
    $event.preventDefault();
    this.deleteConfirmed.emit(false);
    this.modal.hide();
  }
}
