import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl, FormArray } from '@angular/forms';
import { IPerson } from '../../../model/person';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameInputComponent implements OnInit {
  firstName: AbstractControl;
  lastName: AbstractControl;
  nameGroup: FormGroup;

  @Input()
  tabIndexOffset: number;

  @Input()
  person: IPerson;

  @Input()
  children: FormArray;

  @Output()
  remove: EventEmitter<null> = new EventEmitter();

  @Output()
  personUpdated: EventEmitter<IPerson> = new EventEmitter<IPerson>();

  showRemove = false;

  constructor(private formBuilder: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.nameGroup = this.formBuilder.group({
      'firstName': [this.person.firstName, Validators.required],
      'lastName': [this.person.lastName, Validators.required]
    });

    this.firstName = this.nameGroup.controls['firstName'];
    this.lastName = this.nameGroup.controls['lastName'];
    this.children.push(this.nameGroup);
    this.showRemove = this.remove.observers.length > 0;
  }

  getPerson() {
    return {
      firstName: this.firstName.value,
      lastName: this.lastName.value
    } as IPerson;
  }

  removeClicked($event) {
    $event.preventDefault();
    this.remove.emit();
  }

  personChanged($event) {
    this.personUpdated.emit({
      firstName: this.firstName.value,
      lastName: this.lastName.value
    } as IPerson);
  }

  getTabIndex(index: number) {
    return this.tabIndexOffset + index;
  }
}
