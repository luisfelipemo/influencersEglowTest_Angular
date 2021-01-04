
import { Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-influencer-update',
  templateUrl: './influencer-update.component.html',
  styleUrls: ['./influencer-update.component.css']
})
export class InfluencerUpdateComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.html',
  styleUrls: ['./influencer-update.component.css']
})
export class DialogContentExampleDialog {}