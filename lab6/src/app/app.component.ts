import {
  Component,
  OnInit,
  Inject,
  Input,
  OnChanges,
  ViewChild,
} from '@angular/core';
import { AppService } from './app.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Storage } from '@ionic/storage-angular';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [AppService],
})
export class AppComponent implements OnInit {
  title = 'Lab6';
  users: any[];
  storageId = 0;
  usersStorage: any[];

  displayedColumns: string[] = ['name', 'surname', 'dob', 'age', 'gender'];
  constructor(
    private appService: AppService,
    private dialog: MatDialog,
    private selectedStorage: Storage
  ) {
    this.selectedStorage.create();
    if (!this.selectedStorage.get('storageId')) {
      this.selectedStorage.set('storageId', 0);
    }
  }

  async ngOnInit(): Promise<void> {
    this.appService.getUsers().subscribe(async (users) => {
      console.log(users);
      this.users = users.results;

      console.log(this.users);
      
    });
    if ((await this.selectedStorage.length()) != 0) {
      this.usersStorage = [];
      this.selectedStorage.forEach((key, value, index) => {
        if (value != 'storageId') {
          this.usersStorage.push(key);
        }
      });
    }
   
  }

  async onRowClicked(row: any) {
    this.dialog.open(DialogComp, {
      data: row,
    });
    let tmpData = (await this.selectedStorage.get('storageId')).toString();
    this.selectedStorage.set(tmpData, row);
    this.selectedStorage.set(
      'storageId',
      (await this.selectedStorage.get('storageId')) + 1
    );
    if ((await this.selectedStorage.length()) != 0) {
      this.usersStorage = [];
      this.selectedStorage.forEach((key, value, index) => {
        if (value != 'storageId') {
          this.usersStorage.push(key);
        }
      });
    }
  }

  async clearStorage() {
    this.selectedStorage.clear();
    this.selectedStorage.set('storageId', 0);
    this.usersStorage = [];
  }
}

@Component({
  selector: 'dialogComp',
  template: `<p>Name:{{ data.name.first }}</p>
    <p>Surname:{{ data.name.last }}</p>
    <p>DoB:{{ data.dob.date }}</p>
    <p>City:{{ data.dob.age }}</p>
    <p>Postcode:{{ data.gender }}</p> `,
})
export class DialogComp {
  constructor(
    public dialogRef: MatDialogRef<DialogComp>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}

@Component({
  selector: 'storageEnjoyer',
  templateUrl: 'app.storageEnjoyer.html',
})
export class StorageEnjoyer implements OnChanges {
  @Input() inpUsers: any[];
  @ViewChild('childTable') table: MatTable<any>;
  users: any[];
  tmpUsers = [];
  displayedColumns: string[] = ['name', 'surname', 'dob', 'age', 'gender'];

  constructor() {}

  ngOnChanges() {
    if (this.inpUsers) {
      this.users = this.inpUsers;
    }
    if (this.users) {
      if (this.table) {
        console.log(this.table);
        this.table.renderRows();
      }
    }
  }
}
