import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  templateUrl: 'dialog.component.html'
})
export class DialogComponent {
  constructor(public dialogRef: MdDialogRef<DialogComponent>) {}

  avatars: Array<String> = ['Cat', 'Dog'];
  selectedAvatar = this.avatars[0];
}
