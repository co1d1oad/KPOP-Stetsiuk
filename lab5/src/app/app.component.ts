import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular3';


  data: any = [];
  favorites: any[] = [];


  theBoundCallback: Function=()=>{};

  list:any[]=[]

  ngOnInit() {
    this.theBoundCallback = this.theCallback.bind(this);
    this.onFetchList()
  }

  theCallback(item: any) {
    this.onFavorite(item);
  }

  constructor(public dialog: MatDialog) {}

  openDialog(item: any, func: any): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '500px',
      data: { ...item, func: func },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');

    });
  }

  onFavorite(item: any) {
    console.log('favorited', item);
    this.favorites = [...this.favorites, item];
  }

  onFetchList = async () => {
    const newData: any = await fetch(
      'http://jsonplaceholder.typicode.com/todos',
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET',
      }
    );
    const processed = await newData.json();
    console.log(processed)
    this.list = processed
 
  };
  prevdef=(event:any)=>{
    event.preventdefault()
  }
  
}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: ` userId {{ data.userId }}
  id {{ data.id }}
    <button (click)="data.func(data)">Favorite</button>
    <br />completed: {{ data.completed }}<br />
    title: {{ data.title }} <br />`,
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
