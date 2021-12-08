import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular3';

  n:number[]=[0,0,0]
  changeN(event: any,i:number) {
    console.log(event.target.value);
    this.n[i] = parseInt(event.target.value);
    this.n = [...this.n]
  }

}
