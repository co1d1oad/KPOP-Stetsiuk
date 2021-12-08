import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  
  nums = [0, 0];
  calculations: any = {};
  changeNum(event: any, num: number = 0) {
    this.nums[num] = event.target.value ? event.target.value : 0;
    console.log(this.nums[num]);
  }
  onCalculate() {
    this.calculations.avg_a =
      (Math.pow(this.nums[0], 3) + Math.pow(this.nums[1], 3)) / 
      this.nums.length;
    this.calculations.avg_g = Math.pow(Math.abs(this.nums[0]) * Math.abs(this.nums[1]), 1/this.nums.length);
  }
  
}