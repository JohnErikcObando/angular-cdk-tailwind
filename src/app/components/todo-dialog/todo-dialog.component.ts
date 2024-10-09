import { Component, inject } from '@angular/core';

import { DIALOG_DATA, DialogModule, DialogRef } from '@angular/cdk/dialog';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  faBars,
  faCheckSquare,
  faCheckToSlot,
  faClock,
  faClose,
  faTag,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { BtnComponent } from '../btn/btn.component';
import { ToDo } from '../../models/ToDo';

interface InputData {
  todo: ToDo;
}

interface OutputData {
  rta: boolean;
}

@Component({
  selector: 'app-todo-dialog',
  standalone: true,
  imports: [DialogModule, FontAwesomeModule, BtnComponent],
  templateUrl: './todo-dialog.component.html',
})
export class TodoDialogComponent {
  dialogRef = inject<DialogRef<OutputData>>(DialogRef<OutputData>);
  data = inject(DIALOG_DATA);

  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;

  todo!: ToDo;

  constructor() {
    this.todo = this.data.todo;
  }

  close() {
    this.dialogRef.close({
      rta: true,
    });
  }

  closeWithRta(rta: boolean) {
    this.dialogRef.close({ rta });
  }
}
