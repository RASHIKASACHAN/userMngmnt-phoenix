// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-user-dialog',
//   templateUrl: './user-dialog.component.html',
//   styleUrls: ['./user-dialog.component.scss']
// })
// export class UserDialogComponent {

// }
// user-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
})
export class UserDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.dialogRef.close(this.data);
  }
}
